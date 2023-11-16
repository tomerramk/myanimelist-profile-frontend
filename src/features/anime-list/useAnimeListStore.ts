import { create } from "zustand";

import type AnimeCard from "@entities/AnimeCard";

type AnimeDataProps = {
	data: {
		mal_id: number;
		url: string;
		images: {
			jpg: {
				image_url: string;
				small_image_url: string;
				large_image_url: string;
			};
			webp: {
				image_url: string;
				small_image_url: string;
				large_image_url: string;
			};
		};
		approved: boolean;
		titles: AnimeTitle[];
		title: string;
		title_english: string;
		title_japanese: string;
		title_synonyms: string[];
		type: string;
		source: string;
		episodes: number;
		status: string;
		airing: boolean;
		aired: {
			from: string;
			to: string;
			prop: {
				from: AnimeDate;
				to: AnimeDate;
			};
			string: string;
		};
		duration: string;
		rating: string;
		score: number;
		scored_by: number;
		rank: number;
		popularity: number;
		members: number;
		favorites: number;
		synopsis: string;
		background: string;
		season: string;
		year: number;
		broadcast: {
			day: string;
			time: string;
			timezone: string;
			string: string;
		};
		producers: AnimeEntity[];
		licensors: AnimeEntity[];
		studios: AnimeEntity[];
		genres: AnimeEntity[];
		explicit_genres: AnimeEntity[];
		themes: AnimeEntity[];
		demographics: AnimeEntity[];
	};
};

type AnimeTitle = {
	type: string;
	title: string;
};

type AnimeDate = {
	day: number;
	month: number;
	year: number;
};

type AnimeEntity = {
	mal_id: number;
	type: string;
	name: string;
	url: string;
};

type StatusDetails = {
	[key: string]: {
		barColorClass: string;
		borderColorClass: string;
		textColorClass: string;
		text: string;
	};
};

interface AnimeListStoreProps {
	animeList: AnimeCard[];

	setAnimeList: (animeList: AnimeCard[]) => void;

	animeData: AnimeDataProps;

	setAnimeData: (animeData: AnimeDataProps) => void;

	animeTab: string;

	setAnimeTab: (animeTab: string) => void;

	listFilter: string;

	setListFilter: (listFilter: string) => void;

	statusDetails: StatusDetails;

	getStatusDetails: (
		status: string,
	) => StatusDetails[keyof StatusDetails] | undefined;
}

const useAnimeListStore = create<AnimeListStoreProps>((set, get) => ({
	animeList: [],

	setAnimeList: (list) => set({ animeList: list }),

	animeData: <AnimeDataProps>{
		data: {},
	},

	setAnimeData: (anime) => set({ animeData: anime }),

	animeTab: "all",

	setAnimeTab: (tab) => set({ animeTab: tab }),

	listFilter: "",

	setListFilter: (filter) => set({ listFilter: filter }),

	statusDetails: {
		watching: {
			barColorClass: "bg-green-500",
			borderColorClass: "border-green-500",
			textColorClass: "text-green-500",
			text: "Watching",
		},
		completed: {
			barColorClass: "bg-blue-500",
			borderColorClass: "border-blue-500",
			textColorClass: "text-blue-500",
			text: "Completed",
		},
		on_hold: {
			barColorClass: "bg-yellow-500",
			borderColorClass: "border-yellow-500",
			textColorClass: "text-yellow-500",
			text: "On Hold",
		},
		dropped: {
			barColorClass: "bg-red-500",
			borderColorClass: "border-red-500",
			textColorClass: "text-red-500",
			text: "Dropped",
		},
		plan_to_watch: {
			barColorClass: "bg-gray-500",
			borderColorClass: "border-gray-500",
			textColorClass: "text-gray-500",
			text: "Plan to Watch",
		},
	},

	getStatusDetails: (status) => {
		const state = get();
		return (
			state.statusDetails[status] || {
				barColorClass: "text-gray-400",
				textColorClass: "text-gray-400",
				text: "Unknown",
			}
		);
	},
}));

export default useAnimeListStore;
