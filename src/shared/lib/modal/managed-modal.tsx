import dynamic from "next/dynamic";
import { useModalAction, useModalState } from "./modal.context";
import Modal from "./modal";
import { EditModalViewType } from "@/shared/types/types";

const EditProductsView = dynamic(
  () => import("@/shared/lib/modal/ui/editProductsModal/editProductsModal")
);

const EditPricePlansView = dynamic(
  () => import("@/shared/lib/modal/ui/editPricePlansModal/editPricePlansModal")
);

const EditPagesView = dynamic(
  () => import("@/shared/lib/modal/ui/editPagesModal/editPagesModal")
);

function renderModal(view: EditModalViewType | undefined, data: any) {
  switch (view) {
    case EditModalViewType.EDIT_PRODUCTS:
      return <EditProductsView data={data} />;
    case EditModalViewType.EDIT_PRICE_PLANS:
      return <EditPricePlansView data={data} />;
    case EditModalViewType.EDIT_PAGES:
      return <EditPagesView data={data} />;
    default:
      return null;
  }
}

const ManagedModal = () => {
  const { isOpen, view, data } = useModalState();
  const { closeModal } = useModalAction();

  return (
    <Modal open={isOpen} onClose={closeModal}>
      {renderModal(view, data)}
    </Modal>
  );
};

export default ManagedModal;
