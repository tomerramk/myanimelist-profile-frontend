import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SiMyanimelist } from "react-icons/si";
import SearchInput from "@components/SearchInput";

import useProfileStore from "@features/profile/useProfileStore";
import AnimeData from "@entities/AnimeData";

const HomePage: React.FC = () => {
	const [searchValue, setSearchValue] = useState("");
	const navigate = useNavigate();
	const { setUsername } = useProfileStore();
	const [backgroundImages, setBackgroundImages] = useState<string[]>([]);

	useEffect(() => {
		const fetchAnimeData = async () => {
			try {
				let animeList: AnimeData[] = [];
				const response = await fetch(`https://api.jikan.moe/v4/top/anime`);
				const data = await response.json();
				animeList = [...animeList, ...data.data];

				const topAnime = animeList.slice(0, 24);

				const imageUrls = topAnime.map(
					(anime: AnimeData) => `url(${anime.images.jpg.image_url})`,
				);

				setBackgroundImages(imageUrls);
			} catch (error) {
				console.error("Error fetching top-rated anime:", error);
			}
		};

		fetchAnimeData();
	}, []);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const handleEnterPress = () => {
		setUsername(searchValue);
		navigate("/profile");
	};

	return (
		<div className="relative flex w-full">
			<div className="absolute bottom-0 left-0 right-0 top-0 grid grid-cols-8 gap-0 opacity-70">
				{backgroundImages.map((imageUrl, index) => (
					<div
						key={index}
						className="m-[2px] aspect-auto h-[98%] "
						style={{
							backgroundImage: imageUrl,
							backgroundSize: "cover",
							backgroundPosition: "center",
							borderRadius: "8px",
						}}
					/>
				))}
			</div>
			<div className="z-10 flex w-full flex-col items-center pt-10 ">
				<SiMyanimelist size={200} />
				<SearchInput
					placeholder="Search username from MyAnimeList.net"
					value={searchValue}
					onSearch={handleSearch}
					onEnterPress={handleEnterPress}
				/>
			</div>
		</div>
	);
};

export default HomePage;
