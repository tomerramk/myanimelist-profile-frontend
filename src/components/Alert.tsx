import { useState, useEffect } from "react";

type AlertProps = {
	trigger: boolean;
	message: string;
};

const Alert = ({ trigger, message }: AlertProps) => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (trigger) {
			setVisible(true);
			setTimeout(() => {
				setVisible(false);
			}, 3000);
		}
	}, [trigger]);

	return (
		<>
			{visible && (
				<div className="fixed left-1/2 z-20 mt-28 w-fit translate-x-[-50%] animate-fadeIn rounded-lg bg-content-50 p-2 align-middle text-primary">
					<span>{message}</span>
				</div>
			)}
		</>
	);
};

export default Alert;
