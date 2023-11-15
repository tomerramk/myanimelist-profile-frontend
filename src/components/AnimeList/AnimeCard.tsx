import useAnimeListStore from "@features/anime-list/useAnimeListStore";
import type AnimeCard from "@entities/AnimeCard";

interface AnimeCardProps {
	anime: AnimeCard;
	onClick: () => void;
}

const AnimeCardComponent = ({ anime, onClick }: AnimeCardProps) => {
	const { getStatusDetails } = useAnimeListStore();

	const statusDetails = getStatusDetails(anime.status);

	const formatDate = (dateString: string) => {
		if (!dateString) return "N/A";
		const options: Intl.DateTimeFormatOptions = {
			year: "numeric",
			month: "short",
			day: "numeric",
			hour: "numeric",
			minute: "2-digit",
		};
		return new Date(dateString).toLocaleDateString(undefined, options);
	};

	return (
		<div
			className="max-w-md animate-fadeIn overflow-hidden rounded bg-content-50 shadow-lg transition-all hover:scale-105 hover:bg-content-100"
			onClick={onClick}
		>
			<img
				className="h-64 w-full object-cover"
				src={anime.main_picture.large}
				alt={anime.title}
			/>
			<div className={`h-2 w-full ${statusDetails?.barColorClass}`}></div>
			<div className="px-6 py-4">
				<div className="mb-2 text-xl font-bold">{anime.title}</div>
				<p className="text-base">
					Status:
					<span className={`${statusDetails?.textColorClass} font-semibold`}>
						{statusDetails?.text}
					</span>
				</p>
				<p className="text-base">
					Score: <span className="font-semibold">{anime.score}</span>
				</p>
				<p className="text-base">
					Episodes Watched:{" "}
					<span className="font-semibold">{anime.num_episodes_watched}</span>
				</p>
				<p className="text-base">
					Rewatching:{" "}
					<span className="font-semibold">
						{anime.is_rewatching ? "Yes" : "No"}
					</span>
				</p>
				<p className="text-base">
					Last Updated:{" "}
					<span className="font-semibold">{formatDate(anime.updated_at)}</span>
				</p>
				{anime.status === "completed" && (
					<p className="text-base">
						Finish Date:{" "}
						<span className="font-semibold">
							{formatDate(anime.finish_date)}
						</span>
					</p>
				)}
			</div>
		</div>
	);
};

export default AnimeCardComponent;
