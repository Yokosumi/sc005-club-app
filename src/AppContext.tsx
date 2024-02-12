import { createContext, useState, useEffect } from "react";
import { Member, MemberSchema } from "../interfaces";
import axios from "axios";

interface IAppContext {
	message: string;
	members: Member[];
	errorMessage: string;
}

interface IAppProvider {
	children: React.ReactNode;
}

const backendUrl = "http://localhost:3311";

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [members, setMembers] = useState<Member[]>([]);
	const [errorMessage, setErrorMessage] = useState("");

	const message = "Welcome to this site.";

	useEffect(() => {
		(async () => {
			const response = await axios.get(`${backendUrl}/members`);
			const _members: Member[] = [];
			for (const _member of response.data) {
				const parseResult = MemberSchema.safeParse(_member);
				if (parseResult.success) {
					_members.push(_member);
				} else {
					console.log(
						`LOG ENTRY: bad member object (${JSON.stringify(
							_member
						)})`
					);
					setErrorMessage(
						"At least one of the members could not be imported, please write to admin@dkjfdkfcompany.com"
					);
				}
			}
			setMembers(_members);
		})();
	}, []);

	return (
		<AppContext.Provider
			value={{
				message,
				members,
				errorMessage,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
