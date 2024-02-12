import { createContext, useState, useEffect } from "react";
import { IMember } from "../interfaces";
import axios from "axios";

interface IAppContext {
	message: string;
	members: IMember[];
}

interface IAppProvider {
	children: React.ReactNode;
}

const backendUrl = "http://localhost:3311";

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [members, setMembers] = useState<IMember[]>([]);
	const message = "Welcome to this site.";

	useEffect(() => {
		(async () => {
			const response = await axios.get(`${backendUrl}/members`);
			const _members = response.data;
			setMembers(_members);
		})();
	}, []);

	return (
		<AppContext.Provider
			value={{
				message,
				members,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
