const button = document.getElementById("convert-button");
const select = document.getElementById("select-currency");

const dolar = 4.97;
const euro = 5.92;
const bitcoin = 160519.36;

const convertValue = () => {
  const input = document.getElementById("input-value").value;
  const realValueText = document.getElementById("real-value-text");
  const currencyValueText = document.getElementById("currency-value-text");

  realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(input);

  if (select.value === "US$ Dólar americano") {
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(input / dolar);
  }

  if (select.value === "€ Euro") {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(input / euro);
  }
  if (select.value === "Bitcoin") {
      const convertBitcoin = input / bitcoin
    currencyValueText.innerHTML = convertBitcoin.toFixed(7);
  }
};

const changeCurrency = () => {
  const currencyImg = document.getElementById("currency-img");
  const currencyName = document.getElementById("currency-name");

  if (select.value === "US$ Dólar americano") {
    currencyImg.src = "./assets/dolar.png";
    currencyName.innerHTML = "Dólar americano";
  }
  if (select.value === "€ Euro") {
    currencyImg.src = "./assets/euro.png";
    currencyName.innerHTML = "Euro";
  }
  if (select.value === "Bitcoin") {
    currencyImg.src = "./assets/bitcoin.png";
    currencyName.innerHTML = "Bitcoin";
  }
  convertValue();
};

button.addEventListener("click", convertValue);
select.addEventListener("change", changeCurrency);
