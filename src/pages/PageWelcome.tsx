import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageWelcome = () => {
	const { message } = useContext(AppContext);

	return <p>{message}</p>;
};
