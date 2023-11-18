import type AnimeDate from "./AnimeDate";
import type AnimeTitle from "./AnimeTitle";
import type AnimeEntity from "./AnimeEntity";

export default interface AnimeData {
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
}
