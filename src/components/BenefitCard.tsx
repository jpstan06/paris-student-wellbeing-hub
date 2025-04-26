
import { cn } from "@/lib/utils";

interface BenefitCardProps {
  title: string;
  description: string;
  className?: string;
}

export function BenefitCard({ title, description, className }: BenefitCardProps) {
  return (
    <div className={cn(
      "bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow",
      className
    )}>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
