import {
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
} from "@tremor/react";

const users: {
	id: string;
	name: string;
	email: string;
	github: string;
}[] = [
	{
		id: "1",
		name: "John",
		email: "john@gmail.com",
		github: "john",
	},
	{
		id: "2",
		name: "David",
		email: "david@gmail.com",
		github: "david",
	},
	{
		id: "3",
		name: "Julio",
		email: "julio@gmail.com",
		github: "juliocesar",
	},
	{
		id: "4",
		name: "Federico felipe",
		email: "fedefelipe@gmail.com",
		github: "fedefeli",
	},
	{
		id: "5",
		name: "Juan Diego",
		email: "juandiego2002@gmail.com",
		github: "juandiego",
	},
	{
		id: "6",
		name: "Lucas vega",
		email: "lucasvega@gmail.com",
		github: "lucasvega",
	},
];

export function ListOfUsers() {
	return (
		<Card>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeaderCell>Id</TableHeaderCell>
						<TableHeaderCell>Nombre</TableHeaderCell>
						<TableHeaderCell>Email</TableHeaderCell>
						<TableHeaderCell>Acciones</TableHeaderCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{users.map((item) => (
						<TableRow key={item.name}>
							<TableCell>{item.id}</TableCell>
							<TableCell>{item.name}</TableCell>
							<TableCell>{item.email}</TableCell>
							<TableCell>Acciones</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
