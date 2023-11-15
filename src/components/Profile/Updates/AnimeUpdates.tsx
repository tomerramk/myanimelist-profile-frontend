import UpdateCard from "./UpdateCard";
import type AnimeUpdates from "@entities/AnimeUpdates";

interface animeUpdatesProps {
	anime: AnimeUpdates[];
}

const AnimeUpdatesComponent = ({ anime }: animeUpdatesProps) => {
	return anime[0]
		? anime.map((anime) => {
				return (
					<UpdateCard
						title={anime.entry.title}
						image_url={anime.entry.images.jpg.image_url}
						score={anime.score}
						status={anime.status}
						date={anime.date}
						finished={anime.episodes_seen}
						total={anime.episodes_total}
					></UpdateCard>
				);
		  })
		: null;
};

export default AnimeUpdatesComponent;
