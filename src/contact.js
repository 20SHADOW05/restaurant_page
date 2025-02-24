import map from "./assets/map.jpg";

function contact(){
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const div = document.createElement("div");
    div.classList.add("contact");

    const ph = document.createElement("p");
    ph.classList.add("phone");

    const location = document.createElement("p");
    location.classList.add("location");

    const locate = document.createElement("img");
    locate.classList.add("map");

    ph.textContent = "✆ 7364-344-231";
    location.textContent = "📍 Sambas Region , East Blue";
    locate.src = map;

    div.appendChild(ph);
    div.appendChild(location);
    div.appendChild(locate);

    content.appendChild(div);

}

export { contact };