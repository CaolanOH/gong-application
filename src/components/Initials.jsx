const Initials = ({ user, color }) => {
	const firstNameLetter = user.firstName.slice(0, 1);
	const lastNameLetter = user.lastName.slice(0, 1);

	const initialsStyle = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "32px",
		height: "32px",
		color: "#00000",
		fontSize: "12px",
		borderRadius: "50%",
		borderStyle: "solid",
		borderColor: color,
		fontWeight: "600"
	};

	const photoStyle = {
		width: 32,
		height: 32,
		borderRadius: "50%",
		objectFit: "cover"
	};
	return (
		<>
			{user.photo ? (
				<img src={user.photo} style={photoStyle} />
			) : (
				<span style={initialsStyle}>
					{firstNameLetter}
					{lastNameLetter}
				</span>
			)}
		</>
	);
};

export default Initials;
