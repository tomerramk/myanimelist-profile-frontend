import { create } from "zustand";

import type Statistics from "@entities/Statistics";
import type AnimeUpdates from "@entities/AnimeUpdates";
import type MangaUpdates from "@entities/MangaUpdates";

type fullProfile = {
	mal_id: number;
	username: string;
	url: string;
	images: {
		jpg: {
			image_url: string;
		};
		webp: {
			image_url: string;
		};
	};
	last_online: string;
	gender: string;
	birthday: string;
	location: string;
	joined: string;
	statistics: Statistics;
	favorites: {
		anime: {
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
			title: string;
			type: string;
			start_year: number;
		}[];
		manga: {
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
			title: string;
			type: string;
			start_year: number;
		}[];
		characters: {
			mal_id: number;
			url: string;
			images: {
				jpg: {
					image_url: string;
				};
				webp: {
					image_url: string;
					small_image_url: string;
				};
			};
			name: string;
		}[];
		people: {
			mal_id: number;
			url: string;
			images: {
				jpg: {
					image_url: string;
				};
			};
			name: string;
		}[];
	};
	updates: {
		anime: AnimeUpdates[];
		manga: MangaUpdates[];
	};
	about: string;
};

interface HeaderProps {
	username: string;

	setUsername: (username: string) => void;

	profileData: fullProfile;

	setProfileData: (profileData: fullProfile) => void;
}

const useProfileStore = create<HeaderProps>((set) => ({
	username: "",

	setUsername: (name) => set({ username: name }),

	profileData: {
		mal_id: 0,
		username: "",
		url: "",
		images: {
			jpg: {
				image_url: "",
			},
			webp: {
				image_url: "",
			},
		},
		last_online: "",
		gender: "",
		birthday: "",
		location: "",
		joined: "",
		statistics: {
			anime: {
				days_watched: 0,
				mean_score: 0,
				watching: 0,
				completed: 0,
				on_hold: 0,
				dropped: 0,
				plan_to_watch: 0,
				total_entries: 0,
				rewatched: 0,
				episodes_watched: 0,
			},
			manga: {
				days_read: 0,
				mean_score: 0,
				reading: 0,
				completed: 0,
				on_hold: 0,
				dropped: 0,
				plan_to_read: 0,
				total_entries: 0,
				reread: 0,
				chapters_read: 0,
				volumes_read: 0,
			},
		},
		favorites: {
			anime: [],
			manga: [],
			characters: [],
			people: [],
		},
		updates: {
			anime: [],
			manga: [],
		},
		about: "",
	},

	setProfileData: (data) => set({ profileData: data }),
}));

export default useProfileStore;
