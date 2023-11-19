import { createBrowserRouter } from "react-router-dom";

import Layout from "@pages/Layout";
import ErrorPage from "@pages/ErrorPage";
import HomePage from "@pages/HomePage";
import ProfilePage from "@pages/ProfilePage";
import AnimeListPage from "@pages/AnimeListPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "/profile",
				element: <ProfilePage />,
			},
			{
				path: "/anime",
				element: <AnimeListPage />,
			},
		],
	},
]);

export default router;
