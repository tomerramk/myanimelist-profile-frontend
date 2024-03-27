import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import useProfileStore from "@features/profile/useProfileStore";

const useAnimeList = (search: string) => {
	const { username } = useProfileStore();

	return useQuery({
		queryKey: ["animeList", { search }],
		queryFn: async () => {
			if (!search) return [];
			const url = `http://localhost:8080/api/users/animelist/all/${username}`;
			try {
				const { data } = await axios.get(url);
				return data;
			} catch (error) {
				throw new Error("Failed to fetch anime list");
			}
		},
	});
};

export default useAnimeList;
