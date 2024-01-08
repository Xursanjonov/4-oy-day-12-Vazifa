const card_container = document.querySelector(".card_container");
let baceUrl = "http://localhost:3000/flags";

const render = (data) => {
  console.log(data);
  card_container.innerHTML = data.map(
    (item) => `
  <div class="card">
    <img class="card_img" src="${item.img}" alt="germany">
    <h3 class="card_title">${item.name}</h3>
    <ul class="card_list">
        <li class="card_text">Population: <span class="card_info_text">${item.population}</span></li>
        <li class="card_text">Region: <span class="card_info_text">${item.region}</span></li>
        <li class="card_text">Capital: <span class="card_info_text">${item.capital}</span></li>
    </ul>
  </div>
  `
  );
};

const getData = async () => {
  try {
    const res = await fetch(baceUrl);
    const data = await res.json();
    render(data);
  } catch (error) {}
};

getData();
