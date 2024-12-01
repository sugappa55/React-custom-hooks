import { ChangeEvent, useCallback, useState } from "react";
import useDebounce from "../custom-hooks/useDebounce";
import { debounce } from "../utils";

const DebouncedInput = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);
  const [debounced, setDebounced] = useState("");

  const handleUpdate = useCallback(
    debounce((e: any) => setDebounced(e.target.value)),
    []
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    handleUpdate(e);
  };

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="flex w-[33%] gap-[1%]">
        <input
          type="text"
          placeholder="Search"
          value={search}
          className="w-[85%] p-4 border border-green-600 rounded-md outline-none"
          onChange={handleChange}
        />
        <button
          className="p-4 w-[14%] text-center border border-red-600 rounded-md"
          onClick={() => setSearch("")}
        >
          Clear
        </button>
      </div>
      <p className="my-2">Normal search - {search}</p>
      <p className="my-2">Debounced search - {debouncedSearch}</p>
      <p className="my-2">Debounced with Helper - {debounced}</p>
    </div>
  );
};

export default DebouncedInput;
