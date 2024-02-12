import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageWelcome = () => {
	const { message, members, errorMessage } = useContext(AppContext);

	return (
		<>
			<p>{message}</p>
			{errorMessage && (
				<p className="mt-3 bg-yellow-300 text-red-700 p-2 rounded w-fit">
					{errorMessage}
				</p>
			)}
			<h2 className="text-xl mt-3 mb-2">Members</h2>
			<ul className="list-disc ml-6">
				{members.map((member) => {
					return (
						<li key={member.id}>
							<p>
								{member.name} (ID = {member.id}, age ={" "}
								{member.age})
							</p>
						</li>
					);
				})}
			</ul>
		</>
	);
};
