interface PopupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Popup({ children, ...props }: PopupProps) {
  return (
    <div
      className="w-full h-full fixed top-0 left-0 flex justify-center items-center bg-[rgba(0,0,0,0.8)] p-4 inset-0 z-40"
      {...props}
    >
      <div
        className="min-w-full sm:min-w-[320px] bg-white p-4 rounded"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
