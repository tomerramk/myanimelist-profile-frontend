import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";

type AlertProps = {
	trigger: boolean;
	message: string;
	type: "error" | "warning" | "success";
};

const Alert = ({ trigger, message, type }: AlertProps) => {
	const [visible, setVisible] = useState(false);

	const colorMap: Record<AlertProps["type"], string> = {
		error: "red",
		warning: "orange",
		success: "green",
	};
	useEffect(() => {
		console.log(type);
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
				<div
					className="animate-fadeInOut fixed left-1/2 z-20 mt-28 flex w-fit translate-x-[-50%]
					 items-center rounded-lg bg-content-50 p-2 text-primary"
				>
					<ExclamationTriangleIcon
						className="float-left ml-2 flex"
						width={20}
						height={20}
						color={colorMap[type]}
					/>
					<span className="pl-10 pr-10">{message}</span>
				</div>
			)}
		</>
	);
};

export default Alert;
