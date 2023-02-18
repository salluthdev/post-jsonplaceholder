import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "outline";
}

const variants = {
  primary: "text-stone-800 bg-[aqua] border border-stone-800",
  outline: "text-[aqua] bg-stone-800 border border-[aqua]",
};

export default function Button({
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  let variantClasses = variants[variant];

  return (
    <button
      className={`text-sm font-semibold rounded-sm py-2 px-4 ${variantClasses}`}
      {...props}
    >
      {children}
    </button>
  );
}
