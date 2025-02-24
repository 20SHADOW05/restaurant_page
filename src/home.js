import sanji_image from "./assets/cookSanji.jpeg";

function Home(){
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const div = document.createElement("div");
    div.classList.add("home");
    const owner = document.createElement("p")
    owner.classList.add("owner")
    const chefImg = document.createElement("img");
    chefImg.classList.add("chefImg");
    const chef = document.createElement("p");
    chef.classList.add("chef");

    owner.textContent = 'The Baratie is an ocean-going restaurant run by Zeff,located in East Blue.';
    chefImg.src = sanji_image;
    chef.textContent = "Sanji is a master chef who cooks with passion, precision, and heart, ensuring every meal is a masterpiece. His deep respect for food and unwavering commitment to never letting anyone go hungry make him truly legendary."

    div.appendChild(owner);
    div.appendChild(chefImg);
    div.appendChild(chef);
    
    content.appendChild(div);
}

export { Home };
