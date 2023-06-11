let jsonText = "",
  textTo = "";

function calFuelToll() {
  var distance = document.getElementById("distance").value;
  var average = document.getElementById("avg").value;
  var fuel = document.getElementById("fuel").value;
  var toll = document.getElementById("toll").value;
  var persons = document.getElementById("persons").value;

  let totalExpense = Math.round((distance / average) * fuel + toll);
  console.log(totalExpense);
  let perPerson = Math.round(totalExpense / persons);
  console.log(perPerson);

  totalExpense = isNaN(totalExpense) ? 0 : totalExpense;
  perPerson = isNaN(perPerson) ? 0 : perPerson;

  document.getElementById("fuelToll").innerText =
    "Total expense: " + totalExpense + "/- Per person: " + perPerson + "/-";
}

function calMileage() {
  var tdistance = document.getElementById("tdistance").value;
  var fuelFilled = document.getElementById("fFilled").value;

  let mileage = Math.round(tdistance / fuelFilled);
  console.log(mileage);

  mileage = isNaN(mileage) ? 0 : mileage;
  document.getElementById("mileage").innerText = mileage + " Km/Ltr";
}
