export default interface AnimeUpdates {
	entry: {
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
	};
	score: number;
	status: string;
	episodes_seen: number;
	episodes_total: number;
	date: string;
}
