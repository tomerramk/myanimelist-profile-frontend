interface AnimeStatsProps {
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
}

const AnimeStats = ({ anime }: AnimeStatsProps) => {
	const totalValue =
		anime.watching +
		anime.completed +
		anime.on_hold +
		anime.dropped +
		anime.plan_to_watch;

	const watchingWidth = `${(anime.watching / totalValue) * 100}%`;
	const completedWidth = `${(anime.completed / totalValue) * 100}%`;
	const onHoldWidth = `${(anime.on_hold / totalValue) * 100}%`;
	const droppedWidth = `${(anime.dropped / totalValue) * 100}%`;
	const planToWathWidth = `${(anime.plan_to_watch / totalValue) * 100}%`;

	return (
		<>
			<div className="mt-2 block h-6 overflow-hidden rounded-sm bg-[#272727]">
				<span
					className="inline-block h-6 bg-green-700"
					style={{ width: watchingWidth }}
				></span>
				<span
					className="inline-block h-6 bg-blue-900"
					style={{ width: completedWidth }}
				></span>
				<span
					className="inline-block h-6 bg-yellow-500"
					style={{ width: onHoldWidth }}
				></span>
				<span
					className="inline-block h-6 bg-red-700"
					style={{ width: droppedWidth }}
				></span>
				<span
					className="inline-block h-6 bg-gray-500"
					style={{ width: planToWathWidth }}
				></span>
			</div>
			<div className=" ml-2 mr-2 mt-3">
				<ul className="float-left w-40">
					<li className="mb-1 flex items-center">
						<span className="leading-1 float-left mr-2 mt-[1px] h-3 w-3 rounded-[50%] bg-green-700"></span>
						<span className="flex-grow">Watching</span>
						<span className="float-right">{anime.watching}</span>
					</li>
					<li className="mb-1 flex items-center">
						<span className="leading-1 float-left mr-2 mt-[1px] h-3 w-3 rounded-[50%] bg-blue-900"></span>
						<span className="flex-grow">Completed</span>
						<span className="float-right">{anime.completed}</span>
					</li>
					<li className="mb-1 flex items-center">
						<span className="leading-1 float-left mr-2 mt-[1px] h-3 w-3 rounded-[50%] bg-yellow-500"></span>
						<span className="flex-grow">On Hold</span>
						<span className="float-right">{anime.on_hold}</span>
					</li>
					<li className="mb-1 flex items-center">
						<span className="leading-1 float-left mr-2 mt-[1px] h-3 w-3 rounded-[50%] bg-red-700"></span>
						<span className="flex-grow">Dropped</span>
						<span className="float-right">{anime.dropped}</span>
					</li>
					<li className="mb-1 flex items-center">
						<span className="leading-1 float-left mr-2 mt-[1px] h-3 w-3 rounded-[50%] bg-gray-500"></span>
						<span className="flex-grow">Plan to Watch</span>
						<span className="float-right">{anime.plan_to_watch}</span>
					</li>
				</ul>
				<ul className="float-right w-52">
					<li className="mb-1 flex items-center">
						<span className="flex-grow">Total Entries</span>
						<span className="float-right">{anime.total_entries}</span>
					</li>
					<li className="mb-1 flex items-center">
						<span className="flex-grow">Rewatched</span>
						<span className="float-right">{anime.rewatched}</span>
					</li>
					<li className="mb-1 flex items-center">
						<span className="flex-grow">Episodes Watched</span>
						<span className="float-right">{anime.episodes_watched}</span>
					</li>
				</ul>
			</div>
		</>
	);
};

export default AnimeStats;
