const button = document.querySelector("button");

button.addEventListener("click", () => {
  const planetURL = "https://swapi.dev/api/planets/?search=alderaan";

  axios.get(planetURL).then((res) => {
    const residents = res.data.results[0].residents;

    residents.forEach((url) => {
      axios.get(url).then((res) => {
        const name = res.data.name;
        const h2 = document.createElement("h2");
        h2.textContent = name;
        document.querySelector("body").appendChild(h2);
      });
    });
  });
});
