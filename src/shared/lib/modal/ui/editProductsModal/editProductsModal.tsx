import { CloseIcon } from "@/shared/svgs/closeIcon";
import { useModalAction } from "../../modal.context";
import { Products } from "@/shared/types/types";
import { ChangeEvent, FormEvent, useState } from "react";
import { updateProducts } from "@/api/systemeApi";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Button from "@/shared/button/button";

interface EditProductsModalProps {
  data: Products;
}

export default function EditProductsModal(props: EditProductsModalProps) {
  const { data } = props;
  const { closeModal } = useModalAction();
  const router = useRouter();
  const [inputValue, setInputValue] = useState(data.name);
  const [loading, setLoading] = useState(false);
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsInputEmpty(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!inputValue) {
      setIsInputEmpty(true);
      setLoading(false);
      return;
    }

    const response = await updateProducts(data.id, inputValue);
    if (response?.status !== 200) {
      setLoading(false);
      toast.error("Failed to update products");
    }
    setLoading(false);
    toast.success("Successfully updated");
    router.refresh();
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="border rounded w-[30vw] flex flex-col gap-8 px-4 py-4 bg-dark-main text-white">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between gap-2">
            <div>Edit</div>
            <CloseIcon className="cursor-pointer" onClick={closeModal} />
          </div>

          <div className="flex flex-col gap-2">
            <div>Name</div>

            <input
              name="name"
              value={inputValue}
              onChange={handleInputChange}
              className="peer block w-full bg-transparent text-sm outline-2 pl-2 focus:outline-none border rounded px-2 py-2"
            />
            {isInputEmpty && (
              <span className="text-red-300">
                Your input field should not be empty
              </span>
            )}
          </div>
        </div>
        <Button
          className="w-fit border rounded px-4 py-2 self-center"
          loading={loading}
        >
          Save
        </Button>
      </div>
    </form>
  );
}
