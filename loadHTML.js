function loadHTML(url, elementId) {
	fetch(url)
		.then((response) => {
			if (!response.ok) {
				throw new Error(
					`Error al cargar ${url}: ${response.status} ${response.statusText}`
				);
			}
			return response.text();
		})
		.then((html) => {
			document.getElementById(elementId).innerHTML = html;
		})
		.catch((error) => {
			console.error(error);
		});
}

// Inyección al index.html
loadHTML("header.html", "header");
loadHTML("footer.html", "footer");
