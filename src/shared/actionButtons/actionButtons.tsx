import { useModalAction } from "../lib/modal/modal.context";
import { EditIcon } from "../svgs/editIcon";
import { EditModalViewType } from "../types/types";

interface ActionButtonsProps {
  editModalView: EditModalViewType;
  data: string;
}

export function ActionButtons(props: ActionButtonsProps) {
  const { editModalView, data } = props;
  const { openModal } = useModalAction();

  function handleEditModal() {
    openModal(editModalView, data);
  }
  return (
    <div className="gap-8 inline-flex w-auto items-center cursor-pointer">
      {editModalView && (
        <button onClick={handleEditModal}>
          <EditIcon />
        </button>
      )}
    </div>
  );
}
