
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Language = 'en' | 'fr';

interface LanguageToggleProps {
  onLanguageChange: (lang: Language) => void;
  currentLanguage: Language;
}

export function LanguageToggle({ onLanguageChange, currentLanguage }: LanguageToggleProps) {
  return (
    <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full p-1 border border-gray-200">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onLanguageChange('en')}
        className={cn(
          "rounded-full px-4",
          currentLanguage === 'en' && "bg-white shadow-sm"
        )}
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onLanguageChange('fr')}
        className={cn(
          "rounded-full px-4",
          currentLanguage === 'fr' && "bg-white shadow-sm"
        )}
      >
        FR
      </Button>
    </div>
  );
}
