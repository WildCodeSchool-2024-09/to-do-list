export default function ToDoForm() {
	const handleSubmit = (e) => {
		e.preventDefault();
		return console.log(e);
	};

	return (
		<>
			<h2>Formulaire</h2>
			<form action="" onSubmit={handleSubmit}>
				<input type="text" />
				<button type="submit">Submit</button>
			</form>
		</>
	);
}
