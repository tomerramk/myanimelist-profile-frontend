interface MangaStatsProps {
	manga: {
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

const MangaStats = ({ manga }: MangaStatsProps) => {
	const totalValue =
		manga.reading +
		manga.completed +
		manga.on_hold +
		manga.dropped +
		manga.plan_to_read;

	const readingWidth = `${(manga.reading / totalValue) * 100}%`;
	const completedWidth = `${(manga.completed / totalValue) * 100}%`;
	const onHoldWidth = `${(manga.on_hold / totalValue) * 100}%`;
	const droppedWidth = `${(manga.dropped / totalValue) * 100}%`;
	const planToWathWidth = `${(manga.plan_to_read / totalValue) * 100}%`;

	return (
		<>
			<div className="mt-2 block h-6 overflow-hidden rounded-sm bg-[#272727]">
				<span
					className="inline-block h-6 bg-green-700"
					style={{ width: readingWidth }}
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
						<span className="flex-grow">Reading</span>
						<span className="float-right">{manga.reading}</span>
					</li>
					<li className="mb-1 flex items-center">
						<span className="leading-1 float-left mr-2 mt-[1px] h-3 w-3 rounded-[50%] bg-blue-900"></span>
						<span className="flex-grow">Completed</span>
						<span className="float-right">{manga.completed}</span>
					</li>
					<li className="mb-1 flex items-center">
						<span className="leading-1 float-left mr-2 mt-[1px] h-3 w-3 rounded-[50%] bg-yellow-500"></span>
						<span className="flex-grow">On Hold</span>
						<span className="float-right">{manga.on_hold}</span>
					</li>
					<li className="mb-1 flex items-center">
						<span className="leading-1 float-left mr-2 mt-[1px] h-3 w-3 rounded-[50%] bg-red-700"></span>
						<span className="flex-grow">Dropped</span>
						<span className="float-right">{manga.dropped}</span>
					</li>
					<li className="mb-1 flex items-center">
						<span className="leading-1 float-left mr-2 mt-[1px] h-3 w-3 rounded-[50%] bg-gray-500"></span>
						<span className="flex-grow">Plan to Read</span>
						<span className="float-right">{manga.plan_to_read}</span>
					</li>
				</ul>
				<ul className="float-right w-52">
					<li className="mb-1 flex items-center">
						<span className="flex-grow">Total Entries</span>
						<span className="float-right">{manga.total_entries}</span>
					</li>
					<li className="mb-1 flex items-center">
						<span className="flex-grow">Reread</span>
						<span className="float-right">{manga.reread}</span>
					</li>
					<li className="mb-1 flex items-center">
						<span className="flex-grow">Chapters Read</span>
						<span className="float-right">{manga.chapters_read}</span>
					</li>
					<li className="mb-1 flex items-center">
						<span className="flex-grow">Volumes Read</span>
						<span className="float-right">{manga.volumes_read}</span>
					</li>
				</ul>
			</div>
		</>
	);
};

export default MangaStats;
