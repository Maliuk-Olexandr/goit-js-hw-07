

//-----------------------Task 3-----------------------
const inputElem = document.querySelector("#name-input");
const outputElem = document.querySelector("#name-output");
inputElem.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value.trim();
  outputElem.textContent = inputValue === "" ? "Anonymous" : inputValue;
});

//-----------------------Styles-----------------------

inputElem.style.width = "360px";
inputElem.style.padding = "8px 16px";
inputElem.style.border = "1px solid #808080";
inputElem.style.borderRadius = "4px";
inputElem.style.marginBottom = "16px";

const stylesTitle = document.querySelector("h1");
stylesTitle.style.fontSize = "24px";
stylesTitle.style.fontWeight = "600";
stylesTitle.style.color = "#2e2f42";
