import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const ctaMotion =
  "ei-cta-btn shadow-lg shadow-black/20 transition-[color,transform,box-shadow] duration-200 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-black/40 active:scale-[0.97] active:translate-y-0.5 active:shadow-[inset_0_2px_10px_rgba(0,0,0,0.22),0_1px_2px_rgba(0,0,0,0.06)]";

const outlineCtaMotion =
  "ei-cta-btn ei-cta-btn--outline border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm shadow-black/12 transition-[color,transform,box-shadow] duration-200 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-black/32 active:scale-[0.97] active:translate-y-0.5 active:shadow-[inset_0_2px_8px_rgba(0,0,0,0.14),0_1px_2px_rgba(0,0,0,0.05)]";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: `bg-primary text-primary-foreground hover:bg-primary/90 ${ctaMotion}`,
        destructive: `bg-destructive text-destructive-foreground hover:bg-destructive/90 ${ctaMotion}`,
        outline: outlineCtaMotion,
        secondary: `bg-secondary text-secondary-foreground hover:bg-secondary/80 ${ctaMotion}`,
        ghost:
          "transition-colors duration-200 hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 transition-colors duration-200 hover:underline",
      },
      size: {
        default: "h-10 px-7 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-11",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  navigate?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, navigate = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        data-navigate={navigate ? "true" : undefined}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
