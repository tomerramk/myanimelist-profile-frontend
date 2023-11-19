import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SiMyanimelist } from "react-icons/si";
import SearchInput from "@components/SearchInput";

import useProfileStore from "@features/profile/useProfileStore";

const HomePage: React.FC = () => {
	const [searchValue, setSearchValue] = useState("");
	const navigate = useNavigate();
	const { setUsername } = useProfileStore();

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const handleEnterPress = () => {
		setUsername(searchValue);
		navigate("/profile");
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
