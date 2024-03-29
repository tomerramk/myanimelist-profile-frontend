import React from "react";

import Sidebar from "@components/Sidebar/Sidebar";
import AnimeStats from "@components/Profile/Stats/AnimeStats";
import MangaStats from "@components/Profile/Stats/MangaStats";
import AnimeUpdates from "@components/Profile/Updates/AnimeUpdates";
import MangaUpdates from "@components/Profile/Updates/MangaUpdates";

import useProfileStore from "@features/profile/useProfileStore";

const ProfilePage: React.FC = () => {
	const { profileData } = useProfileStore();

	return (
		<>
			<Sidebar />
			<div className="h-full w-full overflow-y-auto pr-3 align-middle">
				{profileData && (
					<div>
						<div>
							<h2 className="mb-2 mt-2 border-b-4 border-content-50 text-lg">
								Statistics
							</h2>
							<div className="mb-2 table w-full rounded-lg bg-content-50 p-2">
								<div className="table-cell w-1/2 pr-2">
									<h5 className="border-b-2 border-[#222]">Anime Stats</h5>
									<span>Days: {profileData.statistics.anime.days_watched}</span>
									<span className="float-right">
										Mean Score: {profileData.statistics.anime.mean_score}
									</span>
									<AnimeStats anime={profileData.statistics.anime}></AnimeStats>
								</div>
								<div className="pl-2">
									<h5 className="border-b-2 border-[#222]">Manga Stats</h5>
									<span>Days: {profileData.statistics.manga.days_read}</span>
									<span className="float-right">
										Mean Score: {profileData.statistics.manga.mean_score}
									</span>
									<MangaStats manga={profileData.statistics.manga}></MangaStats>
								</div>
							</div>
						</div>

						<div>
							<div className="table w-full rounded-lg bg-content-50 p-2">
								<div className="table-cell w-1/2 pr-2">
									<h5 className="border-b-2 border-[#222]">
										Last Anime Updates
									</h5>
									<AnimeUpdates
										anime={profileData.updates.anime}
									></AnimeUpdates>
								</div>
								<div className="table-cell w-1/2 pl-2 pr-2">
									<h5 className="border-b-2 border-[#222]">
										Last Manga Updates
									</h5>
									<MangaUpdates
										manga={profileData.updates.manga}
									></MangaUpdates>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default ProfilePage;
