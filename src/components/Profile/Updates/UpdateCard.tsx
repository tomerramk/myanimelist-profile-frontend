type updateProps = {
	title: string;
	image_url: string;
	score: number;
	status: string;
	date: string;
	finished: number;
	total: number;
};

const UpdateCard = ({
	title,
	image_url,
	score,
	status,
	date,
	finished,
	total,
}: updateProps) => {
	const formatDate = (dateString: string) => {
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
		<div>
			<div className="mt-2 flex items-start">
				<div className="block">
					<img className="h-40 object-cover" src={image_url} alt={title} />
				</div>
				<div className="ml-2 flex flex-grow flex-col justify-between">
					<div className="text-lg font-semibold">{title}</div>
					<div className="mt-2 flex h-6 items-center rounded-md bg-[#272727]">
						{finished / total === 1 ? (
							<span
								className="ml-0.5 mr-0.5 inline-block h-5 rounded-md bg-blue-900"
								style={{ width: `${(finished / total) * 100}%` }}
							></span>
						) : (
							<span
								className="ml-0.5 mr-0.5 inline-block h-5 rounded-md bg-green-700"
								style={{ width: `${(finished / total) * 100}%` }}
							></span>
						)}
					</div>
					<div>
						{finished ? <div>{`${status} ${finished}/${total}`}</div> : status}
						<div>Scored {score === 0 ? "-" : score}</div>
					</div>
				</div>
				<div className="text-lg">{formatDate(date)}</div>
			</div>
		</div>
	);
};

export default UpdateCard;
