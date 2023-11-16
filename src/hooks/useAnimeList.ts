import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";

const useAnimeList = () => {
	return useInfiniteQuery({
		queryKey: ["animelist"],
		queryFn: async ({ pageParam = 1 }) => {
			const username = "tomeram";
			const res = await axios.get(
				`http://localhost:8080/api/users/animelist/${username}?limit=25&page=${pageParam}`,
			);
			return res.data;
		},
		initialPageParam: 1,
		getNextPageParam: (lastPage) => {
			return lastPage.nextPage;
		},
	});
};

export default useAnimeList;
