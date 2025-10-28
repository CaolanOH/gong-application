import Employee from "./Employee";

const HierarchyTree = ({ users }) => {
	const rootManagers = users.filter((u) => !u.managerId);

	return (
		<div>
			{rootManagers.map((manager) => (
				<Employee key={manager.id} manager={manager} users={users} />
			))}
		</div>
	);
};

export default HierarchyTree;
