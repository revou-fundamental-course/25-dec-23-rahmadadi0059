function changeCalculator(type) {
    if (type === "luas") {
        document.getElementById("luasCalculator").style.display = "block";
        document.getElementById("kelilingCalculator").style.display = "none";
        document.getElementById("base").value = "";
        document.getElementById("height").value = "";
        document.getElementById("luasResult").innerText = "Hasil luas: ";
    } else if (type === "keliling") {
        document.getElementById("luasCalculator").style.display = "none";
        document.getElementById("kelilingCalculator").style.display = "block";
        document.getElementById("side1").value = "";
        document.getElementById("side2").value = "";
        document.getElementById("side3").value = "";
        document.getElementById("kelilingResult").innerText = "Hasil keliling: ";
    }
}

function calculateLuas() {
    const base = parseFloat(document.getElementById("base").value);
    const height = parseFloat(document.getElementById("height").value);
    if (isNaN(base) || isNaN(height)) {
        alert("Masukkan angka yang valid untuk alas dan tinggi.");
        return;
    }

    const luas = 0.5 * base * height;
    document.getElementById("luasResult").innerText = "Hasil luas: " + luas;
}

function calculateKeliling() {
    const side1 = parseFloat(document.getElementById("side1").value);
    const side2 = parseFloat(document.getElementById("side2").value);
    const side3 = parseFloat(document.getElementById("side3").value);

    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
        alert("Masukkan angka yang valid untuk semua sisi.");
        return;
    }

    const keliling = side1 + side2 + side3;
    document.getElementById("kelilingResult").innerText =
        "Hasil keliling: " + keliling;
}

function resetCalculator(type) {
    if (type === "luas") {
        document.getElementById("base").value = "";
        document.getElementById("height").value = "";
        document.getElementById("luasResult").innerText = "Hasil luas: ";
    } else if (type === "keliling") {
        document.getElementById("side1").value = "";
        document.getElementById("side2").value = "";
        document.getElementById("side3").value = "";
        document.getElementById("kelilingResult").innerText = "Hasil keliling: ";
    }
}
