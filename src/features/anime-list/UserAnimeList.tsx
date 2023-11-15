import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";

import AnimeList from "@components/AnimeList/AnimeList";
import AnimeTabs from "@components/AnimeList/AnimeTabs";

import useAnimeListStore from "./useAnimeListStore";

const fetchAnimeList = async ({ pageParam = 1 }) => {
	const username = "tomeram";
	const res = await axios.get(
		`http://localhost:8080/api/users/animelist/${username}?limit=25&page=${pageParam}`,
	);
	return res.data;
};

const UserAnimeList: React.FC = () => {
	const { animeTab } = useAnimeListStore();

	const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
		useInfiniteQuery({
			queryKey: ["animelist"],
			queryFn: fetchAnimeList,
			initialPageParam: 1,
			getNextPageParam: (lastPage) => {
				return lastPage.nextPage;
			},
		});

	const fetchedAnimeCount =
		data?.pages.reduce((total, page) => total + page.data.length, 0) || 0;

	const allAnime = data?.pages.flatMap((page) => page.data) || [];

	return (
		<div className="flex h-full flex-col">
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
				<AnimeList anime={allAnime} />
			</InfiniteScroll>
		</div>
	);
};

export default UserAnimeList;
