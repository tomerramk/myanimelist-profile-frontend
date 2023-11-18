import { createBrowserRouter } from "react-router-dom";

import Layout from "@pages/Layout";
import HomePage from "@pages/HomePage";
import Profile from "@features/profile/Profile";
import UserAnimeList from "@features/anime-list/UserAnimeList";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		// errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "/profile",
				element: <Profile />,
			},
			{
				path: "/anime",
				element: <UserAnimeList />,
			},
		],
	},
]);

export default router;
