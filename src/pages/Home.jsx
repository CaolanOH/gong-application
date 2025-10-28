import LoginForm from "../components/LoginForm";

const Home = (props) => {
	const appStyles = {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: "70vh"
	};
	return (
		<div style={appStyles}>
			<br />
			<LoginForm
				onAuthenticated={props.onAuthenticated}
				authenticated={props.authenticated}
			/>
		</div>
	);
};

export default Home;
