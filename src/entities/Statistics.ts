export default interface Statistics {
	anime: {
		days_watched: number;
		mean_score: number;
		watching: number;
		completed: number;
		on_hold: number;
		dropped: number;
		plan_to_watch: number;
		total_entries: number;
		rewatched: number;
		episodes_watched: number;
	};
	manga: {
		days_read: number;
		mean_score: number;
		reading: number;
		completed: number;
		on_hold: number;
		dropped: number;
		plan_to_read: number;
		total_entries: number;
		reread: number;
		chapters_read: number;
		volumes_read: number;
	};
}
