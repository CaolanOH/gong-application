import { useNavigate } from "react-router";

const NavBar = (props) => {
	let navigate = useNavigate();
	let loggedIn;
	const logout = () => {
		props.onAuthenticated(false);
		localStorage.removeItem("userId");
		navigate("/", { replace: true });
	};

	const navbarStyles = {
		backgroundColor: "#333",
		color: "white",
		display: "flex",
		justifyContent: "space-between",
		alingItems: "center",
		padding: "10px"
	};

	const logoutBtnStyles = {
		backgroundColor: "#333",
		color: "white",
		border: "none",
		textDecoration: "none",
		cursor: "pointer"
	};

	if (props.authenticated) {
		loggedIn = (
			<>
				<button type="button" onClick={logout} style={logoutBtnStyles}>
					Logout
				</button>
			</>
		);
	}

	return (
		<nav style={navbarStyles}>
			<i>
				<h1>Gong Exercise</h1>
			</i>
			{loggedIn}
		</nav>
	);
};

export default NavBar;
