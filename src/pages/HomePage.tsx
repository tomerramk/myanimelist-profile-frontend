import React from "react";
import { SiMyanimelist } from "react-icons/si";

const HomePage: React.FC = () => {
	return (
		<div className="flex w-full justify-center pt-16">
			<div className="text-center">
				<SiMyanimelist size={200} />
			</div>
		</div>
	);
};

export default HomePage;
