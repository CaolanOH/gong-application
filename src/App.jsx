import { BrowserRouter as Router, Routes, Route } from "react-router";
import { useState, useEffect } from "react";
// COMPONENTS
import NavBar from "./components/NavBar";
// PAGES
import Hierarchy from "./pages/Hierarchy";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
	const [authenticated, setAuthenticated] = useState(false);
	let protectedRoutes;
	useEffect(() => {
		if (localStorage.getItem("id")) {
			setAuthenticated(true);
		}
	}, []);

	const onAuthenticated = (auth, id) => {
		setAuthenticated(auth);
		if (auth) {
			localStorage.setItem("userId", id);
		} else {
			localStorage.removeItem("userId");
		}
	};

	if (authenticated) {
		protectedRoutes = (
			<Route
				path="/hierarchy"
				element={
					<Hierarchy
						onAuthenticated={onAuthenticated}
						authenticated={authenticated}
					/>
				}
			/>
		);
	}
	return (
		<Router>
			<NavBar
				onAuthenticated={onAuthenticated}
				authenticated={authenticated}
			/>
			<Routes>
				<Route
					path="/"
					element={
						<Home
							onAuthenticated={onAuthenticated}
							authenticated={authenticated}
						/>
					}
				/>
				{protectedRoutes}

				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</Router>
	);
};

export default App;
