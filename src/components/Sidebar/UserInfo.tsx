import React from "react";

import useProfileStore from "@features/profile/useProfileStore";

const UserInfo: React.FC = () => {
	const { profileData } = useProfileStore();

	const formatDate = (dateString: string) => {
		const options: Intl.DateTimeFormatOptions = {
			year: "numeric",
			month: "short",
			day: "numeric",
		};
		return new Date(dateString).toLocaleDateString(undefined, options);
	};

	return (
		<div className="table-cell w-1/6 p-4 text-center">
			{profileData && (
				<div className="break-words">
					<ul className="border-top border-1-#222 pb8 mb4 list-disc">
						<li className="inline-block w-56">
							<span className="float-left font-bold">Last Online</span>
							<span className="float-right">
								{formatDate(profileData.last_online)}
							</span>
						</li>
						<li className="inline-block w-56">
							<span className="float-left  font-bold">Gender</span>
							<span className="float-right"> {profileData.gender}</span>
						</li>
						<li className="inline-block w-56">
							<span className="float-left font-bold">Birthday</span>
							<span className="float-right">
								{formatDate(profileData.birthday)}
							</span>
						</li>
						<li className="inline-block w-56">
							<span className="float-left font-bold">Location</span>
							<span className="float-right"> {profileData.location}</span>
						</li>
						<li className="inline-block w-56">
							<span className="float-left font-bold">Joined</span>
							<span className="float-right">
								{formatDate(profileData.joined)}
							</span>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default UserInfo;
