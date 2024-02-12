import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageWelcome = () => {
	const { message, members } = useContext(AppContext);

	return (
		<>
			<p>{message}</p>
			<h2 className="text-xl mt-3 mb-2">Members</h2>
			<ul className="list-disc ml-6">
				{members.map((member) => {
					return <li key={member.id}>{member.name}</li>;
				})}
			</ul>
		</>
	);
};
