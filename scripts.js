// ── DATA ──
const sneakers = [
  {
    name: "Air Force 1",
    brand: "Nike",
    category: "sneaker",
    gender: "men",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211d-1775-4927-a6d8-e5c2d8e63d07/air-force-1-07-mens-shoes-jBrhbr.png",
    buyLink: "https://www.nike.com"
  },
  {
    name: "Dunk Low",
    brand: "Nike",
    category: "sneaker",
    gender: "men",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3cc96f47-7cb1-473a-8a0f-69ae10d07f1f/dunk-low-mens-shoes-87MWM2.png",
    buyLink: "https://www.nike.com"
  },
  {
    name: "Ultraboost 22",
    brand: "Adidas",
    category: "sneaker",
    gender: "men",
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
    buyLink: "https://www.adidas.com"
  },
  {
    name: "Chuck Taylor All Star",
    brand: "Converse",
    category: "sneaker",
    gender: "men",
    image: "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw7e5e6c05/images/a_107/M9166_A_107X1.jpg",
    buyLink: "https://www.converse.com"
  },
  {
    name: "Fresh Foam X 1080",
    brand: "New Balance",
    category: "sneaker",
    gender: "men",
    image: "https://nb.scene7.com/is/image/NB/m1080n12_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440",
    buyLink: "https://www.newbalance.com"
  },
  {
    name: "Gel-Kayano 30",
    brand: "ASICS",
    category: "sneaker",
    gender: "men",
    image: "https://images.asics.com/is/image/asics/1011B548_001_SR_RT_GLB?$zoom$",
    buyLink: "https://www.asics.com"
  },
  {
    name: "RS-X Efekt",
    brand: "Puma",
    category: "sneaker",
    gender: "men",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/390777/01/sv01/fnd/PNA/fmt/png/RS-X-Efekt-Sneakers",
    buyLink: "https://www.puma.com"
  },
  {
    name: "Benassi JDI Slides",
    brand: "Nike",
    category: "slides",
    gender: "men",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/618e3dfd-e204-4c08-ad22-cfd9fe1c2a1f/benassi-jdi-slides-FFTnz5.png",
    buyLink: "https://www.nike.com"
  },
  {
    name: "Adilette Slides",
    brand: "Adidas",
    category: "slides",
    gender: "men",
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e6ced7ac0e0e4e83a8b6ab6800d5aadf_9366/Adilette_Shower_Slides_Black_GZ3775_01_standard.jpg",
    buyLink: "https://www.adidas.com"
  },
  {
    name: "Classic Clog",
    brand: "Crocs",
    category: "slides",
    gender: "men",
    image: "https://www.crocs.com/dw/image/v2/BGXM_PRD/on/demandware.static/-/Sites-crocs-master/default/dw6e6f8a7f/images/large/10001_100_ALT110.jpg",
    buyLink: "https://www.crocs.com"
  },
  {
    name: "Air Max 270",
    brand: "Nike",
    category: "sneaker",
    gender: "women",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/awjogtnt7nejdmqbfmkn/air-max-270-womens-shoes-Pgb94t.png",
    buyLink: "https://www.nike.com"
  },
  {
    name: "Stan Smith",
    brand: "Adidas",
    category: "sneaker",
    gender: "women",
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Stan_Smith_Shoes_White_FX5502_01_standard.jpg",
    buyLink: "https://www.adidas.com"
  },
  {
    name: "574 Core",
    brand: "New Balance",
    category: "sneaker",
    gender: "women",
    image: "https://nb.scene7.com/is/image/NB/wl574evb_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440",
    buyLink: "https://www.newbalance.com"
  },
  {
    name: "Chuck Taylor All Star",
    brand: "Converse",
    category: "sneaker",
    gender: "women",
    image: "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw7e5e6c05/images/a_107/M9166_A_107X1.jpg",
    buyLink: "https://www.converse.com"
  },
  {
    name: "Gel-Nimbus 25",
    brand: "ASICS",
    category: "sneaker",
    gender: "women",
    image: "https://images.asics.com/is/image/asics/1012B201_001_SR_RT_GLB?$zoom$",
    buyLink: "https://www.asics.com"
  },
  {
    name: "Mayze Stack Sneaker",
    brand: "Puma",
    category: "sneaker",
    gender: "women",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/384365/01/sv01/fnd/PNA/fmt/png/Mayze-Stack-Women-s-Sneakers",
    buyLink: "https://www.puma.com"
  },
  {
    name: "Victori One Slides",
    brand: "Nike",
    category: "slides",
    gender: "women",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/45f39132-3aac-4f70-834d-a9fd8080c2f1/victori-one-womens-slides-RRGpCW.png",
    buyLink: "https://www.nike.com"
  },
  {
    name: "Adilette Comfort Slides",
    brand: "Adidas",
    category: "slides",
    gender: "women",
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/30fd2c7f4c9c4a1c8a37ad6800d59d80_9366/Adilette_Comfort_Slides_Black_GY1945_01_standard.jpg",
    buyLink: "https://www.adidas.com"
  },
  {
    name: "Classic Clog",
    brand: "Crocs",
    category: "slides",
    gender: "women",
    image: "https://www.crocs.com/dw/image/v2/BGXM_PRD/on/demandware.static/-/Sites-crocs-master/default/dw6e6f8a7f/images/large/10001_100_ALT110.jpg",
    buyLink: "https://www.crocs.com"
  },
  {
    name: "Fresh Foam Arishi v4",
    brand: "New Balance",
    category: "sneaker",
    gender: "women",
    image: "https://nb.scene7.com/is/image/NB/wariv4l_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440",
    buyLink: "https://www.newbalance.com"
  }
];

// tracks current gender selection
let currentGender = "all";

// ── SHOW CARDS ──
function showCards(list) {
  const cardContainer = document.getElementById("card-container");
  const emptyMessage = document.getElementById("empty-message");
  const templateCard = document.querySelector(".card");

  cardContainer.innerHTML = "";

  if (list.length === 0) {
    emptyMessage.style.display = "block";
    return;
  }

  emptyMessage.style.display = "none";

  for (let i = 0; i < list.length; i++) {
    const sneaker = list[i];
    const newCard = templateCard.cloneNode(true);
    newCard.style.display = "block";

    newCard.querySelector(".card-img").src = sneaker.image;
    newCard.querySelector(".card-img").alt = sneaker.name;
    newCard.querySelector(".card-name").textContent = sneaker.name;
    newCard.querySelector(".card-meta").textContent = sneaker.brand + " · " + sneaker.category;
    newCard.querySelector(".card-buy").href = sneaker.buyLink;

    cardContainer.appendChild(newCard);
  }
}

// ── APPLY FILTERS ──
function applyFilters() {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();

  let filtered = sneakers.filter(function(sneaker) {
    const matchesGender = currentGender === "all" || sneaker.gender === currentGender;
    const matchesSearch = sneaker.name.toLowerCase().includes(searchValue) || sneaker.category.toLowerCase().includes(searchValue);
    return matchesGender && matchesSearch;
  });

  showCards(filtered);
}

// ── GENDER FILTER ──
function filterGender(gender) {
  currentGender = gender;

  document.getElementById("btnAll").classList.remove("active");
  document.getElementById("btnMen").classList.remove("active");
  document.getElementById("btnWomen").classList.remove("active");

  if (gender === "all") document.getElementById("btnAll").classList.add("active");
  if (gender === "men") document.getElementById("btnMen").classList.add("active");
  if (gender === "women") document.getElementById("btnWomen").classList.add("active");

  applyFilters();
}

// ── ON PAGE LOAD ──
document.addEventListener("DOMContentLoaded", function() {
  showCards(sneakers);
});