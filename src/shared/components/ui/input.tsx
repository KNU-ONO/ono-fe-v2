import * as React from 'react';

import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/shared';

const inputVariants = cva(
  'flex h-9 w-full min-w-0 bg-transparent px-3 py-1 text-base transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30',
  {
    variants: {
      variant: {
        default: [
          'rounded-md border border-input shadow-xs',
          'focus-visible:border-ring focus-visible:ring-[2px] focus-visible:ring-ring/50',
          'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
        ],
        underline: [
          'border-0 border-b border-input rounded-none shadow-none px-3 text-sm',
          'focus-visible:border-b-ring focus-visible:border-b-2 focus-visible:ring-0',
          'aria-invalid:border-b-destructive aria-invalid:border-b-2 aria-invalid:ring-0',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface InputProps
  extends React.ComponentProps<'input'>,
    VariantProps<typeof inputVariants> {}

function Input({ className, variant, type, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(inputVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Input };
