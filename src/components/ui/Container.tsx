import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}

export default function Container({
  children,
  className = "",
  narrow = false,
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-6 md:px-8 ${
        narrow ? "max-w-narrow" : "max-w-content"
      } ${className}`}
    >
      {children}
    </div>
  );
}
