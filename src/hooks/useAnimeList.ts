import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";

const useAnimeList = (status: string) => {
	return useInfiniteQuery({
		queryKey: ["animeList", { status }],
		queryFn: async ({ pageParam = 1 }) => {
			const username = "tomeram";
			const url = `http://localhost:8080/api/users/animelist/${username}?limit=25&page=${pageParam}${
				status !== "all" ? `&status=${status}` : ""
			}`;
			try {
				const { data } = await axios.get(url);
				return data;
			} catch (error) {
				throw new Error("Failed to fetch anime list");
			}
		},
		initialPageParam: 1,
		getNextPageParam: (lastPage) => lastPage.nextPage,
	});
};

export default useAnimeList;
