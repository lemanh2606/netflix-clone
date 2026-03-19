import type { JSX, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps): JSX.Element {
  return (
    <div
      className={className}
      style={{
        maxWidth: "1400px",
        width: "100%",
        margin: "0 auto",
        paddingLeft: "clamp(1rem, 5%, 4rem)",
        paddingRight: "clamp(1rem, 5%, 4rem)",
      }}
    >
      {children}
    </div>
  );
}
