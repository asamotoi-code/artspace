function calculatePrice() {
    let designs = document.getElementById("designs").value;
    let price = document.getElementById("price").value;

    let total = designs * price;

    document.getElementById("result").innerHTML =
        "Загальна вартість: " + total + " грн";
}