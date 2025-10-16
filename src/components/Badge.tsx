import { cn } from "@/lib/utils";

interface BadgeProps {
  variant: "implemented" | "review" | "planned";
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ variant, children, className }: BadgeProps) => {
  const variants = {
    implemented: "bg-success text-success-foreground",
    review: "bg-warning text-warning-foreground",
    planned: "bg-muted text-muted-foreground",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
