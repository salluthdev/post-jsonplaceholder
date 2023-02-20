interface PopupProps {
  children: React.ReactNode;
}

export default function Popup({ children }: PopupProps) {
  return (
    <div className="w-full h-full fixed top-0 left-0 flex justify-center items-center bg-[rgba(0,0,0,0.2)] inset-0 z-40">
      <div className="bg-white p-4 rounded">{children}</div>
    </div>
  );
}
