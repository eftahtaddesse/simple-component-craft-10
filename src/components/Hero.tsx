
import React from "react";
import Button from "./ui-custom/Button";

type HeroProps = {
  title: string;
  subtitle: string;
  ctaText?: string;
  secondaryCtaText?: string;
  onCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
  imageSrc?: string;
};

const Hero = ({
  title,
  subtitle,
  ctaText = "Get Started",
  secondaryCtaText,
  onCtaClick,
  onSecondaryCtaClick,
  imageSrc,
}: HeroProps) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800 mb-4">
              {title}
            </h1>
            <p className="text-lg text-gray-600 mb-8">{subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={onCtaClick} size="lg">
                {ctaText}
              </Button>
              {secondaryCtaText && (
                <Button
                  variant="outline"
                  onClick={onSecondaryCtaClick}
                  size="lg"
                >
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          </div>
          {imageSrc && (
            <div className="md:w-1/2">
              <img
                src={imageSrc}
                alt="Hero"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          )}
          {!imageSrc && (
            <div className="md:w-5/12 bg-white p-6 rounded-lg shadow-xl">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-md flex items-center justify-center text-gray-400">
                Your Image Here
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
