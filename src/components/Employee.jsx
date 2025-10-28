import Initials from "./Initials";
const Employee = ({ manager, users }) => {
	const employees = users.filter((u) => u.managerId === manager.id);

	const managerStyle = {
		margin: "10px",
		padding: "5px",
		display: "flex",
		alignItems: "center",
		gap: "10px"
	};
	const employeeStyle = {
		marginTop: "10px",
		marginBottom: "10px",
		marginLeft: "40px"
	};
	const employeeBorder = {
		padding: "5px",
		display: "flex",
		alignItems: "center",
		gap: "10px"
	};

	return (
		<div>
			<div style={managerStyle}>
				<strong> + </strong>
				<Initials user={manager} color={"blue"} />
				<strong>
					{manager.firstName} {manager.lastName}
				</strong>
				<span style={{ color: "#555" }}>({manager.email})</span>
			</div>
			{employees.map((emp) => (
				<div key={emp.id} style={employeeStyle}>
					{users.some((u) => u.managerId === emp.id) ? (
						<Employee manager={emp} users={users} />
					) : (
						<div style={employeeBorder}>
							<strong> - </strong>
							<Initials user={emp} color={"green"} />
							{emp.firstName} {emp.lastName}
							<span style={{ color: "#555" }}>
								{" "}
								({emp.email})
							</span>
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default Employee;
