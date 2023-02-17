interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="text-sm font-semibold text-stone-800 bg-[aqua] border border-stone-800 rounded-sm py-2 px-4"
      {...props}
    >
      {children}
    </button>
  );
}
