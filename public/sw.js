const CACHE_NAME = 'photography-v1';
const STATIC_CACHE = 'static-v1';
const IMAGES_CACHE = 'images-v1';

// Files to cache immediately
const STATIC_ASSETS = [
  '/',
  '/about',
  '/services',
  '/portfolio',
  '/contact',
  '/_next/static/css/app.css',
  '/manifest.json'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((error) => {
        console.error('Error caching static assets:', error);
      })
  );
  
  // Skip waiting to activate immediately
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => {
            return cacheName !== STATIC_CACHE && 
                   cacheName !== IMAGES_CACHE &&
                   cacheName !== CACHE_NAME;
          })
          .map((cacheName) => {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          })
      );
    })
  );
  
  // Take control of all clients
  self.clients.claim();
});

// Fetch event - handle requests
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Handle image requests
  if (request.destination === 'image') {
    event.respondWith(handleImageRequest(request));
    return;
  }
  
  // Handle navigation requests (pages)
  if (request.mode === 'navigate') {
    event.respondWith(handleNavigationRequest(request));
    return;
  }
  
  // Handle static assets
  if (url.pathname.startsWith('/_next/static/') || 
      url.pathname.endsWith('.css') ||
      url.pathname.endsWith('.js')) {
    event.respondWith(handleStaticAssetRequest(request));
    return;
  }
  
  // Default: try network first, then cache
  event.respondWith(handleDefaultRequest(request));
});

// Handle image requests - cache with expiration
async function handleImageRequest(request) {
  const cache = await caches.open(IMAGES_CACHE);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    // Check if image is still fresh (7 days)
    const dateHeader = cachedResponse.headers.get('date');
    if (dateHeader) {
      const cachedDate = new Date(dateHeader);
      const now = new Date();
      const daysDiff = (now - cachedDate) / (1000 * 60 * 60 * 24);
      
      if (daysDiff < 7) {
        return cachedResponse;
      }
    }
  }
  
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Cache successful responses
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Return cached version if available, otherwise a fallback
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return a fallback image
    return new Response(
      `<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#F8F5F0"/>
        <text x="50%" y="50%" text-anchor="middle" fill="#8B7D6B">Image unavailable</text>
      </svg>`,
      { 
        headers: { 
          'Content-Type': 'image/svg+xml',
          'Cache-Control': 'no-cache'
        } 
      }
    );
  }
}

// Handle navigation requests - cache first, then network
async function handleNavigationRequest(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cachedResponse = await cache.match(request);
  
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Update cache with fresh content
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Return cached version if available
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page fallback
    return cache.match('/') || new Response('Offline - Please check your connection', {
      status: 503,
      headers: { 'Content-Type': 'text/html' }
    });
  }
}

// Handle static assets - cache first
async function handleStaticAssetRequest(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    throw error;
  }
}

// Handle other requests - network first, then cache
async function handleDefaultRequest(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    throw error;
  }
}

// Handle background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForm());
  }
});

// Sync contact form submissions when back online
async function syncContactForm() {
  try {
    // Get pending form submissions from IndexedDB
    const pendingSubmissions = await getPendingSubmissions();
    
    for (const submission of pendingSubmissions) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(submission.data)
        });
        
        if (response.ok) {
          // Remove successful submission from pending
          await removePendingSubmission(submission.id);
        }
      } catch (error) {
        console.error('Failed to sync form submission:', error);
      }
    }
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// IndexedDB helpers (simplified)
async function getPendingSubmissions() {
  // In a real implementation, this would use IndexedDB
  // For now, return empty array
  return [];
}

async function removePendingSubmission(id) {
  // In a real implementation, this would remove from IndexedDB
  console.log('Removing pending submission:', id);
}

// Push notifications (if enabled)
self.addEventListener('push', (event) => {
  if (!event.data) return;
  
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: '/icons/icon-192.png',
    badge: '/icons/badge-72.png',
    vibrate: [200, 100, 200],
    data: data.url,
    actions: [
      {
        action: 'view',
        title: 'View'
      },
      {
        action: 'close',
        title: 'Close'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'view') {
    event.waitUntil(
      clients.openWindow(event.notification.data || '/')
    );
  }
});