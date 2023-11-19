import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();

	return (
		<div className="flex h-screen flex-col items-center bg-bkg p-20 text-primary">
			<h1 className="mb-4 text-4xl font-bold text-red-600">
				{isRouteErrorResponse(error) ? "404" : "Error"}
			</h1>
			<p className="mb-4 text-lg">
				{isRouteErrorResponse(error)
					? "Oops! The page you're looking for does not exist."
					: "An unexpected error occurred."}
			</p>
			{isRouteErrorResponse(error) && (
				<p className="text-md mb-4">
					It's possible the page may have been moved or deleted.
				</p>
			)}
			<div className="flex gap-4">
				<button
					onClick={() => (window.location.href = "/")}
					className="rounded bg-content-100 px-4 py-2 font-bold hover:bg-content-50"
				>
					Go to Home
				</button>
				<button
					onClick={() => window.history.back()}
					className="rounded bg-content-100 px-4 py-2 font-bold hover:bg-content-50"
				>
					Go Back
				</button>
			</div>
		</div>
	);
};

export default ErrorPage;
