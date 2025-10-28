import { React, useState, useEffect } from "react";
import HierarchyTree from "../components/HierarchyTree";
const Hierarchy = () => {
	const [users, setUsers] = useState([]);
	const [currentUser, setCurrentUser] = useState(null);

	const hierarchyStyles = {
		display: "flex",
		justifyContent: "center"
	};

	const hierarchyTreeStyles = {
		marginTop: "20px",
		marginBottom: "20px",
		marginLeft: "40px",
		fontStyle: "italic"
	};

	useEffect(() => {
		fetch("https://gongfetest.firebaseio.com/users/.json")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setUsers(data);
			});
	}, []);

	useEffect(() => {
		if (users.length > 0) {
			const storedUserId = localStorage.getItem("userId");
			const foundUser = users.find(
				(u) => String(u.id) === String(storedUserId)
			);
			setCurrentUser(foundUser);
		}
	}, [users]);

	if (!currentUser) return <p>No current user found.</p>;
	return (
		<>
			<div style={hierarchyTreeStyles}>
				<h1>Hierarchy Tree</h1>
				<br />
				<h3>
					Welcome {currentUser.firstName} {currentUser.lastName}
				</h3>
			</div>
			<div style={hierarchyStyles}>
				<HierarchyTree users={users} />
			</div>
		</>
	);
};

export default Hierarchy;
