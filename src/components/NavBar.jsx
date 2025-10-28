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
	} else {
		loggedIn = (
			<>
				<p style={{ color: "white", fontSize: "12px" }}>
					Note for myself: login works for this user:
					"anthony.xiouping@xtreet.tvl", password: "mllv9n0x". Other
					users dont seem to login. Not sure if my issue or db issue.
				</p>
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
