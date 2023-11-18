import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import AnimeList from "@components/AnimeList/AnimeList";
import AnimeTabs from "@components/AnimeList/AnimeTabs";

import useAnimeListStore from "./useAnimeListStore";

import useAnimeList from "@hooks/useAnimeList";
import Sidebar from "@components/Sidebar/Sidebar";

const UserAnimeList: React.FC = () => {
	const { animeTab, setAnimeList } = useAnimeListStore();

	const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
		useAnimeList(animeTab);

	const fetchedAnimeCount =
		data?.pages.reduce((total, page) => total + page.data.length, 0) || 0;

	useEffect(() => {
		setAnimeList(data?.pages.flatMap((page) => page.data) || []);
	}, [data, setAnimeList]);

	return (
		<>
			<Sidebar />
			<div className="flex h-full w-full flex-col">
				<div className="col-span-full mt-4">
					<AnimeTabs selectedStatus={animeTab}></AnimeTabs>
				</div>
				<InfiniteScroll
					dataLength={fetchedAnimeCount}
					next={() => fetchNextPage()}
					hasMore={!!hasNextPage}
					loader={
						isFetchingNextPage ? (
							<h4 className="text-center text-lg font-bold ">Loading...</h4>
						) : null
					}
				>
					<AnimeList />
				</InfiniteScroll>
			</div>
		</>
	);
};

export default UserAnimeList;
