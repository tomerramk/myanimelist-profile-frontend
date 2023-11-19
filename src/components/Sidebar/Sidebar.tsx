import React, { useEffect } from "react";
import axios from "axios";

import UserInfo from "./UserInfo";

import useProfileStore from "@features/profile/useProfileStore";

const Sidebar: React.FC = () => {
	const { username, profileData, setProfileData } = useProfileStore();

	useEffect(() => {
		axios
			.get(`http://localhost:8080/api/users/${username}`)
			.then((response) => {
				setProfileData(response.data.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<div className="ml-4 flex w-64 flex-col text-center">
			{profileData?.username && (
				<div className="break-words">
					<div className="pt-3 text-lg font-bold">
						{profileData.username}'s Profile
					</div>
					<div className="mt-4">
						<img
							className=" mx-auto border-2 border-[#ddd]"
							src={profileData.images.jpg.image_url}
							alt={profileData.username}
						></img>
					</div>
					<UserInfo />
				</div>
			)}
		</div>
	);
};

export default Sidebar;
