
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui-custom/Card";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
};

const FeatureCard = ({
  title,
  description,
  icon,
  className,
}: FeatureCardProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
