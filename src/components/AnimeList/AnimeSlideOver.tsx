import { useEffect } from "react";
import axios from "axios";

import { Cross1Icon } from "@radix-ui/react-icons";
import useAnimeListStore from "@features/anime-list/useAnimeListStore";

type AnimeSlideOverProps = {
	isOpen: boolean;
	onClose?: () => void;
	animeId?: number | null;
};

const AnimeSlideOver = ({ isOpen, onClose, animeId }: AnimeSlideOverProps) => {
	const { animeData, setAnimeData } = useAnimeListStore();

	useEffect(() => {
		if (animeId) {
			axios
				.get(`http://localhost:8080/api/anime/${animeId}`)
				.then((response) => {
					setAnimeData(response.data);
				})
				.catch((error) => {
					console.error(error);
				});
		}
	}, [animeId, setAnimeData]);

	if (!isOpen || !animeData.data) return null;

	const { title, episodes, score, synopsis, images } = animeData.data;

	const cleanedSynopsis = synopsis?.replace("[Written by MAL Rewrite]", "");

	return (
		<div className="fixed inset-0 animate-fadeIn overflow-hidden">
			<div className="absolute inset-0 overflow-hidden">
				<div
					className="absolute inset-0 bg-content-100 bg-opacity-75 transition-opacity"
					onClick={onClose}
				></div>
				<section className="absolute inset-y-0 right-0 flex max-w-3xl animate-slideInRight">
					<div className="flex h-full w-full flex-col bg-content-50 shadow-xl">
						<header className="space-y-1 px-4 py-4">
							<div className="flex items-center justify-between space-x-3">
								<h2 className="text-xl font-medium ">{title}</h2>
								<div className="flex h-7 items-center">
									<button onClick={onClose}>
										<Cross1Icon height={20} width={20} />
									</button>
								</div>
							</div>
						</header>
						<div className="p-4">
							<img
								className="mb-2 max-h-96 rounded-sm shadow-lg"
								src={images?.jpg.large_image_url}
								alt={title}
							/>
							<div className="space-y-2">
								<p>
									<strong>Score:</strong> {score}
								</p>
								<p>
									<strong>Episodes:</strong> {episodes}
								</p>
								<div className="rounded-sm border border-gray-200 p-4 text-left shadow-sm">
									<strong>Synopsis:</strong>
									<p>{cleanedSynopsis}</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default AnimeSlideOver;
