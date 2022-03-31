document.addEventListener("keydown", inputKeyboard);

function inputKeyboard(e) {
  let hsl = document.getElementById("hasil");

  if (e.key === "0") {
    hsl.value += "0";
  } else if (e.key === "1") {
    hsl.value += "1";
  } else if (e.key === "2") {
    hsl.value += "2";
  } else if (e.key === "3") {
    hsl.value += "3";
  } else if (e.key === "4") {
    hsl.value += "4";
  } else if (e.key === "5") {
    hsl.value += "5";
  } else if (e.key === "6") {
    hsl.value += "6";
  } else if (e.key === "7") {
    hsl.value += "7";
  } else if (e.key === "7") {
    hsl.value += "7";
  } else if (e.key === "8") {
    hsl.value += "8";
  } else if (e.key === "9") {
    hsl.value += "9";
  }

  if (e.key === "+") {
    hsl.value += "+";
  } else if (e.key === "-") {
    hsl.value += "-";
  } else if (e.key === "*") {
    hsl.value += "*";
  } else if (e.key === "/") {
    hsl.value += "/";
  }

  if (e.key === "%") {
    hsl.value += eval(hasil.value/100 || null);
  }

  if (e.key === ".") {
    hsl.value += ".";
  }

  if (e.key === "Enter") {
    hsl.value = eval(hasil.value || null);
  }

  if (e.key === "Backspace") {
    let hasilInput = hsl.value;
    hsl.value = hasilInput.substring(0, hsl.value.length - 1);
  }
}

function hapusLayar() {
  document.getElementById("hasil").value = "";
}

function tampilLayar(value) {
  let hsl = document.getElementById("hasil");
  if (!hsl.value) {
    hsl.value = "";
  }
  hsl.value += value;
}
