import { Cross1Icon } from "@radix-ui/react-icons";

import AnimePictures from "@entities/AnimePictures";

type AnimePicturesProps = {
	animePictures: AnimePictures[];
	showPopup: boolean;
	setShowPopup: (showPopup: boolean) => void;
};

const AnimePicturesGrid = ({
	animePictures,
	showPopup,
	setShowPopup,
}: AnimePicturesProps) => {
	const remainingImagesCount =
		animePictures?.length > 4 ? animePictures.length - 4 : 0;

	const handleLastImageClick = () => {
		setShowPopup(true);
	};

	return (
		<>
			<div className="grid h-fit flex-grow grid-cols-2 gap-4">
				{animePictures?.slice(0, 4).map((picture, index) => (
					<div key={index} className="relative">
						<img
							className="h-48 w-36 rounded-sm shadow-lg"
							src={picture.jpg.image_url}
							alt={`Anime Scene ${index + 1}`}
							onClick={index === 3 ? handleLastImageClick : undefined}
						/>
						{index === 3 && remainingImagesCount > 0 && (
							<div className="absolute bottom-0 right-0 bg-bkg bg-opacity-75 px-2 py-1 text-primary">
								+{remainingImagesCount}
							</div>
						)}
					</div>
				))}
			</div>

			{showPopup && (
				<div
					className="fixed inset-0 z-10 flex items-center justify-center bg-bkg bg-opacity-50"
					onClick={() => setShowPopup(false)}
				>
					<div
						className="relative mx-auto max-h-[90vh] overflow-y-auto rounded-lg bg-content-50 p-4"
						onClick={(e) => e.stopPropagation()}
					>
						<button
							className="absolute right-0 top-0 m-4"
							onClick={() => setShowPopup(false)}
						>
							<Cross1Icon height={20} width={20} />
						</button>
						<div className="m-6 grid w-fit grid-cols-3 gap-4">
							{animePictures.map((picture, index) => (
								<img
									key={index}
									className="rounded-sm shadow-lg"
									src={picture.jpg.image_url}
									alt={`Anime Scene ${index + 1}`}
								/>
							))}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default AnimePicturesGrid;
