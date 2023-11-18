import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon } from "@radix-ui/react-icons";

import ThemeSelector from "./ThemeSelector";

import useHeaderStore from "./useheaderStore";

const Header: React.FC = () => {
	const { activeTab, setActiveTab } = useHeaderStore();

	const location = useLocation();

	useEffect(() => {
		switch (location.pathname) {
			case "/anime":
				setActiveTab("anime");
				break;
			case "/profile":
				setActiveTab("profile");
				break;
			default:
				setActiveTab("");
		}
	}, [location, setActiveTab]);

	return (
		<div className="flex h-14 w-screen items-center justify-between bg-primary p-2">
			<div className="flex items-center">
				<Link
					to="/"
					className="focus: mr-2 flex cursor-pointer items-center justify-center rounded-md bg-bkg p-2.5 outline-none hover:bg-content-50"
				>
					<HomeIcon height={20} width={20} />
				</Link>
				<ThemeSelector />
			</div>
			<div className="flex items-center justify-center gap-6">
				<Link
					to="/profile"
					onClick={() => setActiveTab("profile")}
					className={`w-60 rounded-lg p-[5px] text-center text-xl font-medium ${
						activeTab === "profile"
							? "bg-content-50 text-primary"
							: "text-primary hover:text-opacity-80"
					}`}
				>
					Profile
				</Link>
				<span className="h-9 rounded-sm border-l-[3.5px] border-content-50"></span>
				<Link
					to="/anime"
					onClick={() => setActiveTab("anime")}
					className={`w-60 rounded-lg p-[5px] text-center text-xl font-medium ${
						activeTab === "anime"
							? "bg-content-50 text-primary"
							: "text-primary hover:text-opacity-80"
					}`}
				>
					Anime List
				</Link>
			</div>
			<div style={{ width: "fit-content" }}></div>
		</div>
	);
};

export default Header;
