import { useState } from "react";

import AnimeCardComponent from "./AnimeCard";
import AnimeSlideOver from "./AnimeSlideOver";

import type AnimeCard from "@entities/AnimeCard";

import useAnimeListStore from "@features/anime-list/useAnimeListStore";

interface AnimeListProps {
	anime: AnimeCard[];
}

const AnimeList = ({ anime }: AnimeListProps) => {
	const [selectedAnime, setSelectedAnime] = useState<number | null>();

	const { animeTab, listFilter } = useAnimeListStore();

	const animeList = anime
		.filter((anime: AnimeCard) => {
			return animeTab === "all" || anime.status === animeTab;
		})
		.filter((anime: AnimeCard) => {
			return (
				listFilter === "" ||
				anime.title.toLowerCase().includes(listFilter.toLowerCase())
			);
		});

	const handleCardClick = (animeId: number) => {
		setSelectedAnime(animeId);
	};

	const handleClose = () => {
		setSelectedAnime(null);
	};

	return (
		<div className="3xl:grid-cols-7 4xl:grid-col-8 5xl:grid-cols-9 grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
			{animeList.map((anime: AnimeCard) => {
				return (
					<AnimeCardComponent
						key={anime.id}
						anime={anime}
						onClick={() => handleCardClick(anime.id)}
					></AnimeCardComponent>
				);
			})}
			<AnimeSlideOver
				isOpen={!!selectedAnime}
				onClose={handleClose}
				animeId={selectedAnime}
			/>
		</div>
	);
};

export default AnimeList;
