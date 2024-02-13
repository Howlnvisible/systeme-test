import { useLockScroll } from "@/shared/hooks/useLockScroll";
import useOnOutsideClick from "@/shared/hooks/useOutsideClick";
import { useRef } from "react";

export default function Modal({ open, onClose, children }: any) {
  const modalRef = useRef(null);
  useOnOutsideClick(modalRef, onClose);
  useLockScroll(open);

  return (
    <div
      className={
        !open
          ? "hidden"
          : "w-full h-full fixed inset-0 bg-modal-dark bg-opacity-60 z-50 flex justify-center items-center"
      }
    >
      <div ref={modalRef}>{children}</div>
    </div>
  );
}
