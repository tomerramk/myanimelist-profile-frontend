export default interface Favorites {
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
	};
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
	};
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
	};
	people: {
		mal_id: number;
		url: string;
		images: {
			jpg: {
				image_url: string;
			};
		};
		name: string;
	};
}
