let persons = 0;

function calFuelToll() {
  let distance = document.getElementById("distance").value;
  let average = document.getElementById("avg").value;
  let fuel = document.getElementById("fuel").value;
  let toll = document.getElementById("toll").value;
  persons = document.getElementById("persons").value;

  let totalExpense = Math.round((distance / average) * fuel + toll);
  console.log(totalExpense);
  let perPerson = Math.round(totalExpense / persons);
  console.log(perPerson);

  totalExpense = isNaN(totalExpense) ? 0 : totalExpense;
  perPerson = isNaN(perPerson) ? 0 : perPerson;

  document.getElementById("fuelToll").innerHTML =
    "<kbd>Total fuel & toll: " +
    totalExpense +
    "/- Per person: " +
    perPerson +
    "/-</kbd>";
}

function calMileage() {
  let tdistance = document.getElementById("tdistance").value;
  let fuelFilled = document.getElementById("fFilled").value;

  let mileage = Math.round(tdistance / fuelFilled);
  console.log(mileage);

  mileage = isNaN(mileage) ? 0 : mileage;
  document.getElementById("mileage").innerHTML +=
    "<kbd>" + mileage + " Km/Ltr" + "</kbd";
}

function addDetails() {
  for (let pID = 1; pID <= persons; pID++) {
    document.getElementById("details").innerHTML +=
      '<input type="text" class="form-control w-50 mx-auto" placeholder="Person ' +
      pID +
      '" id="n' +
      pID +
      '"/>' +
      '<input type="number" class="form-control w-50 mx-auto" placeholder="Amount" id="a' +
      pID +
      '"/></td><br/><div class="text-success font-weight-bold font-italic" id="c' +
      pID +
      '"></div>';
  }
}

function distribute() {
  for (let cId = 1; cId <= persons; cId++) {
    let amt = document.getElementById("a" + cId).value / persons;
    document.getElementById("c" + cId).innerHTML +=
      "<kbd>" + amt + " /- per head" + "</kbd";
  }
}
