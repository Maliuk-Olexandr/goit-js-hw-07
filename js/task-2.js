const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];
// // ---------------------------- create gallery ----------------------------
const gallery = document.querySelector(".gallery");

const galleryItems = images
  .map(
    ({ url, alt }) =>
      `<li class="gallery-item"><img class="gallery-image" src="${url}" alt="${alt}"></li>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", galleryItems);

// ---------------------------- styles ----------------------------
gallery.style.listStyle = "none";
gallery.style.display = "flex";
gallery.style.flexWrap = "wrap";
gallery.style.gap = "24px";
gallery.style.padding = "10px";
gallery.style.justifyContent = "center";
gallery.style.backgroundColor = "#f0f0f0";
gallery.style.border = "1px solid #ccc";
gallery.style.borderRadius = "15px";
gallery.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";

const imgStyle = document.querySelectorAll(".gallery-image");
imgStyle.forEach((img) => {
  img.style.borderRadius = "10px";
  img.style.width = "360px";
  img.style.height = "300px";
  img.style.transition = "transform 0.2s, box-shadow 0.2s";
});
imgStyle.forEach((img) => {
  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.05)";
    img.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  });
  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
    img.style.boxShadow = "none";
  });
});
