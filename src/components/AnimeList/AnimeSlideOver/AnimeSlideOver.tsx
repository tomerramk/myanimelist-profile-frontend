import { useEffect, useState } from "react";
import axios from "axios";

import { Cross1Icon } from "@radix-ui/react-icons";

import AnimePicturesGrid from "./AnimePicture";
import useAnimeListStore from "@features/anime-list/useAnimeListStore";
import AnimePictures from "@entities/AnimePictures";

type AnimeSlideOverProps = {
	isOpen: boolean;
	onClose?: () => void;
	animeId?: number | null;
};

const AnimeSlideOver = ({ isOpen, onClose, animeId }: AnimeSlideOverProps) => {
	const { animeData, setAnimeData } = useAnimeListStore();
	const [animePictures, setAnimePictures] = useState<AnimePictures[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [showPopup, setShowPopup] = useState(false);

	useEffect(() => {
		if (animeId) {
			setIsLoading(true);
			axios
				.get(`http://localhost:8080/api/anime/${animeId}`)
				.then((response) => {
					setAnimeData(response.data.data);
					setIsLoading(false);
				})
				.catch((error) => {
					console.error(error);
				});
			axios
				.get(`http://localhost:8080/api/anime/pictures/${animeId}`)
				.then((response) => {
					setAnimePictures(response.data.data);
					console.log(response.data);
					setIsLoading(false);
				})
				.catch((error) => {
					console.error(error);
				});
		}
	}, [animeId, setAnimeData]);

	if (!isOpen || !animeData || !animePictures) return null;

	const { title, episodes, score, synopsis, images } = animeData;

	const cleanedSynopsis = synopsis?.replace("[Written by MAL Rewrite]", "");

	return (
		<div className="fixed inset-0 animate-fadeIn overflow-y-auto overflow-x-hidden bg-content-100 bg-opacity-75">
			<div className="absolute inset-0">
				<div
					className="absolute inset-0 transition-opacity"
					onClick={onClose}
				></div>
				{!isLoading && (
					<section className="absolute inset-y-0 right-0 flex max-w-3xl animate-slideInRight">
						<div className="flex h-fit min-h-full w-full flex-col bg-content-50 shadow-xl">
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
							<div className=" p-4">
								<div className="flex h-fit w-fit flex-row space-x-4 ">
									<img
										className="mb-2 flex-none rounded-sm shadow-lg"
										src={images?.jpg.large_image_url}
										alt={title}
									/>
									<AnimePicturesGrid
										animePictures={animePictures}
										showPopup={showPopup}
										setShowPopup={setShowPopup}
									/>
								</div>

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
				)}
			</div>
		</div>
	);
};

export default AnimeSlideOver;
