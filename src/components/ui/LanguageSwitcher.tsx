'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
import { Button } from './Button';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    // Navigate to the new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  const currentLanguage = languages.find(lang => lang.code === locale);

  return (
    <div className="relative group">
      <Button
        variant="ghost"
        size="sm"
        className="flex items-center space-x-2 text-deep-charcoal hover:text-gold-accent"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden md:inline">{currentLanguage?.name}</span>
        <span className="md:hidden">{currentLanguage?.flag}</span>
      </Button>
      
      <div className="absolute right-0 top-full mt-2 w-40 bg-warm-white shadow-lg rounded-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`w-full px-4 py-3 text-left flex items-center space-x-3 hover:bg-sage-green/10 transition-colors first:rounded-t-lg last:rounded-b-lg ${
              language.code === locale
                ? 'bg-sage-green/20 text-gold-accent font-medium'
                : 'text-deep-charcoal'
            }`}
          >
            <span className="text-lg">{language.flag}</span>
            <span className="text-sm">{language.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};