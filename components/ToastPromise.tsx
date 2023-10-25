import { toast } from "react-hot-toast";

type ToastPromiseFunction = (customFunction: () => Promise<any>, loadingMessage: string, successMessage: string, errorMessage: string) => Promise<any>;

const ToastPromise: ToastPromiseFunction = (customFunction, loadingMessage, successMessage, errorMessage) =>
	toast.promise(
		customFunction(),
		{
			loading: loadingMessage,
			success: <b>{successMessage}</b>,
			error: <b>{errorMessage}</b>,
		},
		{
			duration: 10000,
			style: {
				backgroundColor: localStorage.getItem("theme") === "dark" ? "#343a40" : "#f1f3f5",
				color: localStorage.getItem("theme") === "dark" ? "#f1f3f5" : "#343a40",
			},
		}
	);

export default ToastPromise;
