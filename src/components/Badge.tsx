import { cn } from "@/lib/utils";

interface BadgeProps {
  variant: "implemented" | "review" | "planned" | "inProgress";
  children: React.ReactNode;
  className?: string;
  showLabel?: boolean;
}

export const Badge = ({ variant, children, className, showLabel = false }: BadgeProps) => {
  const variants = {
    implemented: "bg-success",
    review: "bg-review",
    planned: "bg-info",
    inProgress: "bg-in-progress",
  };

  if (showLabel) {
    return (
      <div className="flex items-center gap-2">
        <span className={cn("inline-flex w-6 h-6 rounded-full", variants[variant])}></span>
        <span className="text-xs font-medium text-foreground">{children}</span>
      </div>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center w-6 h-6 rounded-full",
        variants[variant],
        className
      )}
    >
      <span className="sr-only">{children}</span>
    </span>
  );
};
