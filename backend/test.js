async function getResponse() {
	return await fetch('http://localhost:3333/orphanages')
			.then(response => response.json())
			.then(json => {
					const data = json.map(item => item);
					return data;
			});
}

console.log(await getResponse());