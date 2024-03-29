import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon } from "@radix-ui/react-icons";

import ThemeSelector from "../../components/Header/ThemeSelector";

import useHeaderStore from "./useheaderStore";
import { Button } from "@radix-ui/themes";
import useProfileStore from "@features/profile/useProfileStore";
import Alert from "@components/Alert";

const Header: React.FC = () => {
	const { activeTab, setActiveTab } = useHeaderStore();
	const { username } = useProfileStore();

	const location = useLocation();

	const [showAlert, setShowAlert] = useState(false);

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

	const handleLinkClick = () => {
		if (username === "") {
			setShowAlert(true);
			setTimeout(() => {
				setShowAlert(false);
			}, 3000);
		}
	};

	return (
		<div className="flex h-12 w-screen items-center justify-between bg-primary p-2">
			<Alert trigger={showAlert} message={"Select a username first"}></Alert>
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
				<Button
					className={`h-9 rounded-lg text-center text-xl font-medium ${
						activeTab === "profile"
							? "bg-content-50 text-primary"
							: "bg-transparent text-white hover:text-opacity-80"
					}`}
					onClick={handleLinkClick}
				>
					<Link
						to={`${username ? "/profile" : ""}`}
						onClick={() => setActiveTab("profile")}
						className="w-60"
					>
						Profile
					</Link>
				</Button>
				<span className="h-9 rounded-sm border-l-[3.5px] border-content-50"></span>
				<Button
					className={`h-9 rounded-lg p-[5px] text-center text-xl font-medium ${
						activeTab === "anime"
							? "bg-content-50 text-primary"
							: "bg-transparent text-white hover:text-opacity-80"
					}`}
					onClick={handleLinkClick}
				>
					<Link
						to={`${username ? "/anime" : ""}`}
						onClick={() => setActiveTab("anime")}
						className="w-60"
					>
						Anime List
					</Link>
				</Button>
			</div>
			<div style={{ width: "fit-content" }}></div>
		</div>
	);
};

export default Header;
