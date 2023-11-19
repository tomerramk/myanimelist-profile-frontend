import React, { useState } from "react";
import SearchInput from "@components/SearchInput";
import { SiMyanimelist } from "react-icons/si";

import useProfileStore from "@features/profile/useProfileStore";

const HomePage: React.FC = () => {
	const [searchValue, setSearchValue] = useState("");

	const { setUsername } = useProfileStore();

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const handleEnterPress = () => {
		setUsername(searchValue);
	};

	return (
		<div className="flex w-full flex-col items-center pt-10">
			<SiMyanimelist size={200} />
			<SearchInput
				placeholder="Search username from MyAnimeList.net"
				value={searchValue}
				onSearch={handleSearch}
				onEnterPress={handleEnterPress}
			/>
		</div>
	);
};

export default HomePage;
