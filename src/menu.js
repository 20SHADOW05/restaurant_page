import friedrice from "./assets/seafood fried rice.png";
import risotto from "./assets/seafood risotto.png";
import soba from "./assets/Soba.png";
import ramen from "./assets/Ramen.png";
import sea_king_meat from "./assets/Penne Gorgonzola with Sea King Meat.png";
import oden from "./assets/Oden.png";
import aburaage from "./assets/Aburaage.png";
import shrimp_paella from "./assets/Dress Shrimp Paella.png";

function Menu() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const div = document.createElement("div");
    div.classList.add("menu");

    const dishes = [
        { 
            src: friedrice, 
            name: "Seafood Fried Rice", 
            desc: "A delightful mix of fresh seafood and fragrant rice, stir-fried to perfection." 
        },
        { 
            src: risotto, 
            name: "Seafood Risotto", 
            desc: "Creamy Italian risotto infused with the rich flavors of the ocean." 
        },
        { 
            src: soba, 
            name: "Soba", 
            desc: "Traditional Japanese buckwheat noodles served with a savory dipping sauce." 
        },
        { 
            src: ramen, 
            name: "Ramen", 
            desc: "A hearty bowl of noodles in a flavorful broth topped with fresh ingredients." 
        },
        { 
            src: sea_king_meat, 
            name: "Gorgonzola with Meat", 
            desc: "A legendary dish made with rare Sea King meat and creamy Gorgonzola sauce." 
        },
        { 
            src: oden, 
            name: "Oden", 
            desc: "A comforting Japanese stew with fish cakes, daikon, and other tasty ingredients." 
        },
        { 
            src: aburaage, 
            name: "Aburaage", 
            desc: "Deep-fried tofu pockets, crispy on the outside , juicy and flavorful inside." 
        },
        { 
            src: shrimp_paella, 
            name: "Dress Shrimp Paella", 
            desc: "A colorful Spanish-inspired dish with shrimp, saffron rice, and vegetables." 
        }
    ];

    dishes.forEach(({ src, name, desc }) => {
        const dishDiv = document.createElement("div"); 
        dishDiv.classList.add("dish-container"); 

        const img = document.createElement("img");
        img.classList.add("Mimg");
        img.src = src;

        const title = document.createElement("h3");
        title.classList.add("dish-name");
        title.textContent = name;

        const description = document.createElement("p"); 
        description.classList.add("dish-desc");
        description.textContent = desc;

        dishDiv.appendChild(img);
        dishDiv.appendChild(title); 
        dishDiv.appendChild(description); 
        div.appendChild(dishDiv); 
    });

    content.appendChild(div); 
}

export { Menu };