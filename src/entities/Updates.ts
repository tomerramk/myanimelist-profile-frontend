export default interface Updates {
	anime: {
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
	};
	manga: {
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
		chapters_read: number;
		chapters_total: number;
		date: string;
	};
}
