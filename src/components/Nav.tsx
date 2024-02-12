import { NavLink } from "react-router-dom";

export const Nav = () => {
	return <nav>
		<ul className="flex gap-4 bg-blue-400 px-4 py-2 content rounded">
			<li><NavLink to="/welcome">Welcome</NavLink></li>
			<li><NavLink to="/info">Info</NavLink></li>
			<li><NavLink to="/about">About</NavLink></li>
		</ul>
	</nav>;
};
