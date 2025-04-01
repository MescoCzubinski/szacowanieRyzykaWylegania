function format(inputString) {
  return inputString
    .replace(/[^0-9.,]/g, "")
    .replace(/^(?!\.)/g, "")
    .replace(/,/g, ".")
    .replace(/^\.($|[^0-9])/, "0.")
    .replace(/\.{2,}/g, ".")
    .replace(/(.*?\..*?)\./g, "$1")
    .replace(/(\d+\.\d{2})\d*/g, "$1");
}
document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", (event) => {
    const inputField = event.target;
    inputField.value = format(inputField.value);
  });
});
const visitedElements = document.querySelectorAll("input, select");
visitedElements.forEach((input) => {
  input.addEventListener("blur", function () {
    if (this.value) {
      this.classList.add("visited");
    } else {
      this.classList.remove("visited");
    }
  });
});

const gatuenkElement = document.querySelector("#gatunek");
const glebaElement = document.querySelector("#gleba");
const odpornoscElement = document.querySelector("#odpornosc");
const nawozenieElement = document.querySelector("#nawozenie");
const stanElement = document.querySelector("#stan");
gatuenkElement.addEventListener("change", () => {
  glebaElement.value = "0";

  if (gatuenkElement.value === "pszenica") {
    let odpronosci = [
      { name: "odporna (8-9 st.)", value: "0" },
      { name: "dość odporna (7 st.)", value: "1" },
      { name: "umiarkowanie odporna (5-6 st.)", value: "2" },
      { name: "dość wrażliwa (4 st.)", value: "3" },
      { name: "wrażliwa (1-3 st.)", value: "4" },
    ];
    odpornoscElement.innerHTML = "<option selected disabled>Wybierz z listy</option>";
    odpronosci.forEach((odpornosc) => {
      let option = document.createElement("option");
      option.textContent = odpornosc.name;
      option.value = odpornosc.value;
      odpornoscElement.appendChild(option);
    });

    let nawozenia = [
      { name: "umiarkowane dawki azotu", value: "0" },
      { name: "średnie dawki azotu", value: "1" },
      { name: "wysokie dawki azotu*", value: "2" },
    ];
    nawozenieElement.innerHTML = "<option selected disabled>Wybierz z listy</option>";
    nawozenia.forEach((nawozenie) => {
      let option = document.createElement("option");
      option.textContent = nawozenie.name;
      option.value = nawozenie.value;
      nawozenieElement.appendChild(option);
    });

    let stany = [
      { name: "słabe krzewienie i mało korzeni", value: "0" },
      { name: "normalne krzewienie", value: "1" },
      { name: "silne krzewienie i dużo korzeni w glebie", value: "3" },
    ];
    stanElement.innerHTML = "<option selected disabled>Wybierz z listy</option>";
    stany.forEach((stan) => {
      let option = document.createElement("option");
      option.textContent = stan.name;
      option.value = stan.value;
      stanElement.appendChild(option);
    });
  } else if (gatuenkElement.value === "jeczmien") {
    let odpronosci = [
      { name: "odporna (7-9 st.)", value: "0" },
      { name: "umiarkowanie odporna (4-6 st.)", value: "1" },
      { name: "wrażliwa (1-3 st.)", value: "2" },
    ];
    odpornoscElement.innerHTML = "<option selected disabled>Wybierz z listy</option>";
    odpronosci.forEach((odpornosc) => {
      let option = document.createElement("option");
      option.textContent = odpornosc.name;
      option.value = odpornosc.value;
      odpornoscElement.appendChild(option);
    });

    let nawozenia = [
      { name: "średnie dawki azotu", value: "0" },
      { name: "wysokie dawki azotu*", value: "2" },
    ];
    nawozenieElement.innerHTML = "<option selected disabled>Wybierz z listy</option>";
    nawozenia.forEach((nawozenie) => {
      let option = document.createElement("option");
      option.textContent = nawozenie.name;
      option.value = nawozenie.value;
      nawozenieElement.appendChild(option);
    });

    let stany = [
      { name: "słabe krzewienie i mało korzeni", value: "0" },
      { name: "normalne krzewienie", value: "2" },
      { name: "silne krzewienie i dużo korzeni w glebie", value: "4" },
    ];
    stanElement.innerHTML = "<option selected disabled>Wybierz z listy</option>";
    stany.forEach((stan) => {
      let option = document.createElement("option");
      option.textContent = stan.name;
      option.value = stan.value;
      stanElement.appendChild(option);
    });
  }
});

document.addEventListener("change", () => {
  let result = parseInt(glebaElement.value) + parseInt(odpornoscElement.value) + parseInt(nawozenieElement.value) + parseInt(stanElement.value);

  const elementResult = document.querySelector("#wynik-opis");
  if (!isNaN(result)) {
    document.querySelector("#wynik").textContent = result + " -";

    if (gatuenkElement.value === "pszenica") {
      switch (result) {
        case 0:
          elementResult.textContent = "ryzyko bardzo niskie";
          break;
        case 1:
          elementResult.textContent = "ryzyko bardzo niskie";
          break;
        case 2:
          elementResult.textContent = "ryzyko bardzo niskie";
          break;
        case 3:
          elementResult.textContent = "ryzyko niskie";
          break;
        case 4:
          elementResult.textContent = "ryzyko niskie";
          break;
        case 5:
          elementResult.textContent = "ryzyko średnie";
          break;
        case 6:
          elementResult.textContent = "ryzyko średnie";
          break;
        case 7:
          elementResult.textContent = "ryzyko średnie";
          break;
        case 8:
          elementResult.textContent = "ryzyko wysokie";
          break;
        case 9:
          elementResult.textContent = "ryzyko wysokie";
          break;
        case 10:
          elementResult.textContent = "ryzyko wysokie";
          break;
        default:
          elementResult.textContent = "ryzyko bardzo wysokie";
          break;
      }
    } else if ((gatuenkElement.value = "jeczmien")) {
      switch (result) {
        case 0:
          elementResult.textContent = "ryzyko niskie";
          break;
        case 1:
          elementResult.textContent = "ryzyko niskie";
          break;
        case 2:
          elementResult.textContent = "ryzyko niskie";
          break;
        case 3:
          elementResult.textContent = "ryzyko niskie";
          break;
        case 4:
          elementResult.textContent = "ryzyko średnie";
          break;
        case 5:
          elementResult.textContent = "ryzyko średnie";
          break;
        case 6:
          elementResult.textContent = "ryzyko średnie";
          break;
        case 7:
          elementResult.textContent = "ryzyko wysokie";
          break;
        case 8:
          elementResult.textContent = "ryzyko wysokie";
          break;
        case 9:
          elementResult.textContent = "ryzyko wysokie";
          break;
        case 10:
          elementResult.textContent = "ryzyko wysokie";
          break;
        default:
          elementResult.textContent = "ryzyko bardzo wysokie";
          break;
      }
    }
  }
});

document.querySelector("#reset").addEventListener("click", () => {
  gatuenkElement.value = 0;
  glebaElement.value = "0";
  odpornoscElement.innerHTML = "<option selected disabled>Wybierz z listy</option>";
  nawozenieElement.innerHTML = "<option selected disabled>Wybierz z listy</option>";
  stanElement.innerHTML = "<option selected disabled>Wybierz z listy</option>";

  document.querySelector("#wynik").textContent = "wybierz parametry";
  document.querySelector("#wynik-opis").textContent = "";

  document.querySelectorAll("select").forEach((select) => {
    select.classList.remove("visited");
  });
});
