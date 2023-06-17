let persons = 0,
  perPerson = 0;
let msg = "";

function calFuelToll() {
  let distance = document.getElementById("distance").value;
  let average = document.getElementById("avg").value;
  let fuel = document.getElementById("fuel").value;
  let toll = document.getElementById("toll").value;
  persons = document.getElementById("persons").value;

  let totalExpense = Math.round((distance / average) * fuel + toll);
  console.log(totalExpense);
  perPerson = Math.round(totalExpense / persons);
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
  document.getElementById("details").innerHTML = "";
  document.getElementById("details").innerHTML +=
    "<pre>First person will receive fuel & toll</pre>";
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
    amt = document.getElementById("a" + cId).value / persons;
    document.getElementById("c" + cId).innerHTML +=
      "<kbd>" + amt + " /- per head" + "</kbd";
  }

  for (let index = 1; index < persons; index++) {
    for (let temp = index + 1; temp <= persons; temp++) {
      if (index == 1) {
        msg +=
          "<b style='color:green !important;'>" +
          document.getElementById("n" + temp).value +
          "&emsp;to&emsp;" +
          document.getElementById("n" + index).value +
          "&emsp;=&emsp;" +
          (((document.getElementById("a" + index).value) / persons + perPerson) -
          ((document.getElementById("a" + temp).value) / persons)) +
          "/-</b><br>";
        console.log(document.getElementById("n" + temp).value);
        console.log(document.getElementById("a" + temp).value / persons);
      } else {
        msg +=
          "<b style='color:green !important;'>" +
          document.getElementById("n" + temp).value +
          "&emsp;to&emsp;" +
          document.getElementById("n" + index).value +
          "&emsp;=&emsp;" +
          (((document.getElementById("a" + index).value) / persons) -
          ((document.getElementById("a" + temp).value) / persons)) +
          "/-</b><br>";
      }
    }
  }
  document.getElementById("dist").innerHTML += msg;
}
