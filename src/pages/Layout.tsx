import { Outlet } from "react-router-dom";
import Header from "@features/header/Header";

const Layout = () => {
	return (
		<div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-bkg text-primary">
			<Header />
			<div className="flex h-full min-h-0 flex-grow pr-3">
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
