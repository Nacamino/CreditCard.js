var card = document.getElementById("card");
var btn_open = document.getElementById("btn_open");
var form_container = document.getElementById("form_card");
var number = document.getElementById("number_card");
var name_card = document.getElementById("name_card");
var logo = document.getElementById("logo");
var firma = document.getElementById("firmas");
var expiration_month = document.getElementById("month_date");
var expiration_year = document.getElementById("year_date");
var ccv = document.getElementById("ccv_content");

// funcion mostrar frente
const showfront = () => {
  if (card.classList.contains("active")) {
    card.classList.remove("active");
  }
};
const toggleClass = (id, Class) => {
  var el = document.getElementById(id);
  if (el.classList.contains(Class)) {
    el.classList.remove(Class);
  } else {
    el.classList.add(Class);
  }
};
// girar la tarjeta
card.addEventListener("click", () => {
  toggleClass("card", "active");
  toggleClass("back_card", "active");
});
// abrir formulario
btn_open.addEventListener("click", () => {
  toggleClass("btn_open", "press");
  form_container.classList.toggle("open");
});

for (let i = 1; i <= 12; i++) {
  let option = document.createElement("option");
  option.value = i;
  option.innerText = i;
  form_container.select_month.appendChild(option);
}
const current_year = new Date().getFullYear();
for (let i = 1; i <= 12; i++) {
  let option = document.createElement("option");
  option.value = i;
  option.innerText = i;
  form_container.select_month.appendChild(option);
}
for (let i = current_year; i < current_year + 8; i++) {
  let option = document.createElement("option");
  option.value = i;
  option.innerText = i;
  form_container.select_year.appendChild(option);
}
// validacion de fomulario----------------------
form_container.input_number.addEventListener("keyup", (e) => {
  // input numero
  let input_value = e.target.value;
  form_container.input_number.value = input_value
    // elimino espacios en blanco
    .replace(/\s/g, "")
    // elimino letras
    .replace(/\D/g, "")
    // espacio cada cuatro numeros
    .replace(/([0-9]{4})/g, "$1 ")
    // elimina el ultimo espaciado
    .trim();
  // numero de tarjeta se escribe simultaneamente en la tarjeta
  number.textContent = input_value;
  if (input_value == "") {
    number.textContent = "#### #### #### ####";
    logo.innerHTML = "";
  }
  // logo cambia con numero
  if (input_value[0] == 4) {
    logo.innerHTML = "";
    const image = document.createElement("img");
    image.src = "/img/visa.png";
    logo.appendChild(image);
  } else if (input_value[0] == 5) {
    logo.innerHTML = "";
    const image = document.createElement("img");
    image.src = "/img/mastercard.png";
    logo.appendChild(image);
  }
  // mostramos la tarjeta para el usuario
  showfront();
});
// innput nombre
form_container.input_name.addEventListener("keyup", (e) => {
  let input_value = e.target.value;
  form_container.input_name.value = input_value.replace(/[0-9]/g, "");
  name_card.textContent = input_value;
  firmas.textContent = input_value;
  if (input_value == "") {
    name_card.textContent = "Jhon doe";
  }
});
// Input date
form_container.select_month.addEventListener("change", (e) => {
  expiration_month.textContent = e.target.value;
  showfront();
});
form_container.select_year.addEventListener("change", (e) => {
  expiration_year.textContent = e.target.value.slice(2);
  showfront();
});
// input ccv
form_container.input_ccv.addEventListener("keyup", (e) => {
  let input_value = e.target.value;
  form_container.input_ccv.value = input_value.replace(/\D/g, "");
  ccv.textContent = input_value;
  if (!card.classList.contains("active")) {
    card.classList.add("active");
  }
});
