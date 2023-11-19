import React from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

type SearchInputProps = {
	placeholder: string;
	value: string;
	onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onEnterPress: () => void;
};

const SearchInput: React.FC<SearchInputProps> = ({
	placeholder,
	value,
	onSearch,
	onEnterPress,
}) => {
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			onEnterPress();
		}
	};

	return (
		<div className="flex w-96 items-center rounded-3xl bg-content-100 p-3 text-primary">
			<MagnifyingGlassIcon height={25} width={25} className="mr-2" />

			<input
				type="text"
				className="flex-grow border-none bg-transparent placeholder-primary outline-none placeholder:opacity-75"
				placeholder={placeholder}
				value={value}
				onChange={onSearch}
				onKeyDown={handleKeyDown}
			/>
		</div>
	);
};

export default SearchInput;
