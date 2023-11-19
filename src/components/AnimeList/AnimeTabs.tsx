import { useState } from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

import FilterAnime from "./FilterAnime";

import useAnimeListStore from "@features/anime-list/useAnimeListStore";

import useAnimeList from "@hooks/useAnimeList";

type tabProps = {
	selectedStatus: string;
};

const AnimeTabs = ({ selectedStatus }: tabProps) => {
	const { animeTab, setAnimeTab, getStatusDetails } = useAnimeListStore();
	const [searchOpen, setSearchOpen] = useState(false);
	const statusDetails = getStatusDetails(selectedStatus);

	const tabs = [
		{ key: "all", label: "All Anime" },
		{ key: "watching", label: "Currently Watching" },
		{ key: "completed", label: "Completed" },
		{ key: "on_hold", label: "On Hold" },
		{ key: "dropped", label: "Dropped" },
		{ key: "plan_to_watch", label: "Plan to Watch" },
	];

	useAnimeList(animeTab);

	return (
		<div className="ml-4 flex w-[calc(100%-2rem)] items-center justify-center rounded bg-content-50 p-2">
			<div className="flex space-x-2">
				{tabs.map((tab) => (
					<button
						key={tab.key}
						className={`rounded px-3 py-2 text-sm font-medium hover:bg-bkg ${
							selectedStatus === tab.key
								? `${statusDetails?.borderColorClass} border-b-4 bg-bkg`
								: ""
						}`}
						onClick={() => setAnimeTab(tab.key)}
					>
						{tab.label}
					</button>
				))}
			</div>
			<div className="ml-28 flex w-56">
				<button
					className="mr-1 p-2"
					onClick={() => setSearchOpen((open) => !open)}
				>
					<MagnifyingGlassIcon height={20} width={20} />
				</button>
				<FilterAnime isOpen={searchOpen} />
			</div>
		</div>
	);
};

export default AnimeTabs;
