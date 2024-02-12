import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageWelcome = () => {
	const { message } = useContext(AppContext);
	console.log(111, message);
	return (
		<p>{message}</p>
	)
}