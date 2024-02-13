import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { SearchIcon } from "../svgs/searchIcon";

interface SearchProps {
  placeholder: string;
}

export function Search(props: SearchProps) {
  const { placeholder } = props;
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0 items-center rounded border border-[#616D8D] py-2 pl-2 ">
      <label htmlFor="search" className="sr-only">
        Поиск
      </label>
      <SearchIcon />
      <input
        className="peer block w-full bg-transparent text-sm outline-2 placeholder:text-gray-500 pl-2 focus:outline-none"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("search")?.toString()}
      />
    </div>
  );
}
