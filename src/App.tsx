import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Sidebar from "@components/Sidebar/Sidebar";

import Header from "@features/header/Header";
import Profile from "@features/profile/Profile";
import UserAnimeList from "@features/anime-list/UserAnimeList";

const App: React.FC = () => {
	return (
		<div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-bkg text-primary">
			<Router>
				<Header />
				<div className="flex h-full min-h-0 flex-grow">
					<Sidebar />
					<div className="min-h-0 flex-grow pl-3 pr-3">
						<Routes>
							<Route path="/" element={<Profile />} />
							<Route path="/profile" element={<Profile />} />
							<Route path="/anime" element={<UserAnimeList />} />
							<Route path="*" element={<div>Not Found</div>} />
						</Routes>
					</div>
				</div>
			</Router>
		</div>
	);
};

export default App;
