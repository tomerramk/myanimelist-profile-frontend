import UpdateCard from "./UpdateCard";
import type MangaUpdates from "@entities/MangaUpdates";

interface animeUpdatesProps {
	manga: MangaUpdates[];
}

const MangaUpdatesComponent = ({ manga }: animeUpdatesProps) => {
	return manga[0]
		? manga.map((manga) => {
				return (
					<UpdateCard
						title={manga.entry.title}
						image_url={manga.entry.images.jpg.image_url}
						score={manga.score}
						status={manga.status}
						date={manga.date}
						finished={manga.chapters_read}
						total={manga.chapters_total}
					></UpdateCard>
				);
		  })
		: null;
};

export default MangaUpdatesComponent;
