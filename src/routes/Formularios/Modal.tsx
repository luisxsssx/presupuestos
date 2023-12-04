import { GrClose } from "react-icons/gr";

interface ModalProps {
  onClose: () => void;
  show: boolean;
  children: React.ReactNode;
}

export default function Modal({ onClose, show, children }: ModalProps) {
    console.log("Props en el Modal:",{ onClose, show})
  return (
    <div className={`modal ${show ? "show" : ""}`}>
      <div className="addP">
        <div className="con">
            <button className="modal-close" onClick={onClose}>
          <GrClose />
        </button>
        </div>
        {children}
      </div>
    </div>
  );
}