import { cn } from "@/lib/utils";

interface BadgeProps {
  variant: "implemented" | "review" | "planned";
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ variant, children, className }: BadgeProps) => {
  const variants = {
    implemented: "bg-success",
    review: "bg-warning",
    planned: "bg-muted",
  };

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
