import { useState } from 'react';
import { LanguageToggle } from '@/components/LanguageToggle';
import { BenefitCard } from '@/components/BenefitCard';
import { Button } from '@/components/ui/button';

type Language = 'en' | 'fr';

const content = {
  en: {
    intro: "Hi, I'm Therapist Dimier",
    subIntro: "Feeling overwhelmed, stressed, or lonely in Paris? Therapist Dimier offers a safe and confidential space to talk, in both English and French. As a former Cité Internationale resident, he understands the emotional challenges students face when living abroad. Take the first step toward feeling better — your well-being matters.",
    benefitsTitle: "What to Expect in Your Free Session",
    benefits: [
      {
        title: "Bilingual Support",
        description: "Comfortable communication in both English and French",
      },
      {
        title: "Flexible Evening Hours",
        description: "Sessions that fit around your academic schedule",
      },
      {
        title: "Safe Space",
        description: "A judgment-free environment to share your concerns",
      },
      {
        title: "Confidential Support",
        description: "Your privacy and comfort are my top priorities",
      },
    ],
    cta: "Book Your Free 30-Minute Session",
  },
  fr: {
    intro: "Je suis Eloic Dimier",
    subIntro: "Vous vous sentez dépassé(e), stressé(e) ou seul(e) à Paris ? Je vous propose un espace d'écoute sûr et confidentiel, en français ou en anglais. Ancien résident de la Cité Internationale, je comprends les défis émotionnels auxquels les étudiants peuvent être confrontés loin de leur pays d'origine. Faites le premier pas vers votre mieux-être : votre santé mentale compte.",
    benefitsTitle: "Ce que vous découvrirez lors de votre séance gratuite",
    benefits: [
      {
        title: "Accompagnement bilingue",
        description: "Parlez librement en anglais ou en français, selon votre préférence",
      },
      {
        title: "Horaires Flexibles",
        description: "Des séances adaptées à votre emploi du temps",
      },
      {
        title: "Un espace d'écoute sans jugement",
        description: "Partagez vos préoccupations dans un environnement bienveillant et respectueux",
      },
      {
        title: "Confidentialité totale",
        description: "Votre vie privée est protégée, tout ce que vous partagez reste strictement confidentiel",
      },
    ],
    cta: "Réserver Votre Séance Gratuite de 30 Minutes",
  },
};

const Index = () => {
  const [language, setLanguage] = useState<Language>('en');
  const t = content[language];

  const openCalendlyLink = () => {
    window.open('https://calendly.com/therapist-dimier/30min', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9F7FE] to-white">
      <header className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-end">
          <LanguageToggle currentLanguage={language} onLanguageChange={setLanguage} />
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t.intro}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {t.subIntro}
              </p>
              <Button 
                size="lg"
                className="bg-[#8E7AB5] hover:bg-[#7B67A3] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                onClick={openCalendlyLink}
              >
                {t.cta}
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden">
                <img 
                  src="/lovable-uploads/f9567850-baad-4caa-8acc-f581eb538a45.png" 
                  alt="Therapist Dimier" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-[#F9F7FE]/50 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              {t.benefitsTitle}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.benefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
          <Button 
            size="lg"
            className="bg-[#8E7AB5] hover:bg-[#7B67A3] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            onClick={openCalendlyLink}
          >
            {t.cta}
          </Button>
        </section>
      </main>
    </div>
  );
};

export default Index;
