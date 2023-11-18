import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { Theme } from "@radix-ui/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import router from "./routes.tsx";
import "@radix-ui/themes/styles.css";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Theme>
				<RouterProvider router={router} />
			</Theme>
		</QueryClientProvider>
	</React.StrictMode>,
);
