import { cn } from "@/lib/utils";
import * as React from "react";

export const H1 = React.forwardRef<
  HTMLHeadingElement,
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
>(({ children, className, ...rest }, ref) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </h1>
  );
});

H1.displayName = "H1";

export const H2 = React.forwardRef<
  HTMLHeadingElement,
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
>(({ children, className, ...rest }, ref) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-3xl font-semibold tracking-tight",
        className
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </h2>
  );
});

H2.displayName = "H2";

export const H3 = React.forwardRef<
  HTMLHeadingElement,
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
>(({ children, className, ...rest }, ref) => {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </h3>
  );
});

H3.displayName = "H3";

export const H4 = React.forwardRef<
  HTMLHeadingElement,
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
>(({ children, className, ...rest }, ref) => {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </h4>
  );
});

H4.displayName = "H4";

export const P = React.forwardRef<
  HTMLParagraphElement,
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
>(({ children, className, ...rest }, ref) => {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </p>
  );
});

P.displayName = "P";

export const Blockquote = React.forwardRef<
  HTMLQuoteElement,
  React.DetailedHTMLProps<
    React.BlockquoteHTMLAttributes<HTMLQuoteElement>,
    HTMLQuoteElement
  >
>(({ children, className, ...rest }, ref) => {
  return (
    <blockquote
      className={cn(
        "my-1 w-full border-l-2 bg-gray-100 px-4 py-2 italic",
        className
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </blockquote>
  );
});

Blockquote.displayName = "Blockquote";

export const Code = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
>(({ children, className, ...rest }, ref) => {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </code>
  );
});

Code.displayName = "Code";
