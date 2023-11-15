export default interface AnimeCard {
	id: number;
	title: string;
	main_picture: {
		medium: string;
		large: string;
	};
	status: string;
	score: number;
	num_episodes_watched: number;
	is_rewatching: boolean;
	updated_at: string;
	finish_date: string;
}
