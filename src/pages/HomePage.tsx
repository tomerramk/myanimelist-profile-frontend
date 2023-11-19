import React, { useState } from "react";
import SearchInput from "@components/SearchInput";
import { SiMyanimelist } from "react-icons/si";

const HomePage: React.FC = () => {
	const [searchValue, setSearchValue] = useState("");

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
		console.log(e.target.value);
	};

	return (
		<div className="flex w-full flex-col items-center pt-10">
			<SiMyanimelist size={200} />
			<SearchInput
				placeholder="Search username from MyAnimeList.net"
				value={searchValue}
				onSearch={handleSearch}
			/>
		</div>
	);
};

export default HomePage;
