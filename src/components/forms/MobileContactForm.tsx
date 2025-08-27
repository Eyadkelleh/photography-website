'use client';

import React, { useState, useRef } from 'react';
import { PhotoButton } from '@/components/ui';
import { cn } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

interface MobileContactFormProps {
  className?: string;
}

const eventTypes = [
  'Wedding',
  'Portrait Session',
  'Family Photos',
  'Corporate Event',
  'Product Photography',
  'Other'
];

export const MobileContactForm: React.FC<MobileContactFormProps> = ({
  className
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  // Refs for auto-focus
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'phone':
        const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
        return !phoneRegex.test(value) ? 'Please enter a valid phone number' : '';
      case 'eventDate':
        const selectedDate = new Date(value);
        const today = new Date();
        return selectedDate <= today ? 'Please select a future date' : '';
      case 'eventType':
        return !value ? 'Please select an event type' : '';
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));

    // Haptic feedback for successful field completion
    if (!error && value && 'vibrate' in navigator) {
      navigator.vibrate(20);
    }
  };

  const validateStep = (step: number): boolean => {
    const stepErrors: FormErrors = {};
    
    switch (step) {
      case 1:
        stepErrors.name = validateField('name', formData.name);
        stepErrors.email = validateField('email', formData.email);
        stepErrors.phone = validateField('phone', formData.phone);
        break;
      case 2:
        stepErrors.eventType = validateField('eventType', formData.eventType);
        stepErrors.eventDate = validateField('eventDate', formData.eventDate);
        break;
      case 3:
        stepErrors.message = validateField('message', formData.message);
        break;
    }

    setErrors(prev => ({ ...prev, ...stepErrors }));
    return !Object.values(stepErrors).some(error => error !== '');
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
      // Haptic feedback
      if ('vibrate' in navigator) {
        navigator.vibrate(30);
      }
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success haptic feedback
      if ('vibrate' in navigator) {
        navigator.vibrate([100, 50, 100]);
      }

      alert('Thank you! Your message has been sent successfully.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        eventType: '',
        message: ''
      });
      setCurrentStep(1);
      setErrors({});
      
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep1 = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-serif font-semibold text-deep-charcoal mb-4">
        Contact Information
      </h2>
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-deep-charcoal mb-2">
          Full Name *
        </label>
        <input
          ref={nameRef}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className={cn(
            'mobile-form-input w-full',
            errors.name && 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
          )}
          placeholder="Enter your full name"
          autoComplete="name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-deep-charcoal mb-2">
          Email Address *
        </label>
        <input
          ref={emailRef}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={cn(
            'mobile-form-input w-full',
            errors.email && 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
          )}
          placeholder="Enter your email address"
          autoComplete="email"
          inputMode="email"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-deep-charcoal mb-2">
          Phone Number *
        </label>
        <input
          ref={phoneRef}
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className={cn(
            'mobile-form-input w-full',
            errors.phone && 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
          )}
          placeholder="Enter your phone number"
          autoComplete="tel"
          inputMode="tel"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
        )}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-serif font-semibold text-deep-charcoal mb-4">
        Event Details
      </h2>
      
      <div>
        <label htmlFor="eventType" className="block text-sm font-medium text-deep-charcoal mb-2">
          Event Type *
        </label>
        <select
          id="eventType"
          name="eventType"
          value={formData.eventType}
          onChange={handleInputChange}
          className={cn(
            'mobile-form-input w-full',
            errors.eventType && 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
          )}
        >
          <option value="">Select event type</option>
          {eventTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        {errors.eventType && (
          <p className="mt-1 text-sm text-red-600">{errors.eventType}</p>
        )}
      </div>

      <div>
        <label htmlFor="eventDate" className="block text-sm font-medium text-deep-charcoal mb-2">
          Preferred Date *
        </label>
        <input
          type="date"
          id="eventDate"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleInputChange}
          min={new Date().toISOString().split('T')[0]}
          className={cn(
            'mobile-form-input w-full',
            errors.eventDate && 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
          )}
        />
        {errors.eventDate && (
          <p className="mt-1 text-sm text-red-600">{errors.eventDate}</p>
        )}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-serif font-semibold text-deep-charcoal mb-4">
        Tell us more
      </h2>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-deep-charcoal mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={6}
          className={cn(
            'form-textarea mobile-form-input w-full resize-none',
            errors.message && 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
          )}
          placeholder="Tell us about your event, vision, and any specific requirements..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
        <p className="mt-1 text-xs text-warm-gray">
          {formData.message.length}/500 characters
        </p>
      </div>
    </div>
  );

  return (
    <div className={cn('max-w-md mx-auto', className)}>
      {/* Progress indicator */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-warm-gray">Step {currentStep} of {totalSteps}</span>
          <span className="text-sm text-warm-gray">{Math.round((currentStep / totalSteps) * 100)}%</span>
        </div>
        <div className="w-full bg-soft-beige rounded-full h-2">
          <div
            className="bg-gold-accent h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}

        {/* Navigation buttons */}
        <div className="flex space-x-3">
          {currentStep > 1 && (
            <PhotoButton
              variant="secondary"
              icon="aperture"
              className="flex-1 touch-feedback"
              onClick={prevStep}
            >
              Back
            </PhotoButton>
          )}
          
          {currentStep < totalSteps ? (
            <PhotoButton
              variant="primary"
              icon="camera"
              className="flex-1 touch-feedback"
              onClick={nextStep}
            >
              Continue
            </PhotoButton>
          ) : (
            <PhotoButton
              variant="primary"
              icon="focus"
              className="flex-1 touch-feedback"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                  Sending...
                </div>
              ) : (
                'Send Message'
              )}
            </PhotoButton>
          )}
        </div>
      </form>
    </div>
  );
};