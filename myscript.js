let persons = 0,
  perPerson = 0;
let msg = "";

function calFuelToll() {
  let distance = document.getElementById("distance").value;
  let average = document.getElementById("avg").value;
  let fuel = document.getElementById("fuel").value;
  let toll = document.getElementById("toll").value;
  persons = document.getElementById("persons").value;

  et totalExpense = Math.round((distance / average) * fuel) + Math.round(toll);
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
    "<pre>First person will receive fuel & toll</pre><div class='table-responsive'><table class='table'><tbody>";
  for (let pID = 1; pID <= persons; pID++) {
    document.getElementById("details").innerHTML +=
      '<tr><td><input type="text" class="form-control w-50 mx-auto" placeholder="Person ' +
      pID +
      '" id="n' +
      pID +
      '"/></td>' +
      '<td><input type="number" class="form-control w-50 mx-auto" placeholder="Amount" id="a' +
      pID +
      '"/></td></tr></tbody></table></div><div class="text-success font-weight-bold font-italic" id="c' +
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

  for (let index = 1; index <= persons; index++) {
    for (let temp = index + 1; temp <= persons; temp++) {
      if (index == 1) {
        msg +=
          "<div class='row'><div class='col'>" +
          document.getElementById("n" + temp).value +
          "</div><div class='col'>To</div><div class='col'>" +
          document.getElementById("n" + index).value +
          "</div><div class='col'>=</div><div class='col'>" +
          (document.getElementById("a" + index).value / persons +
            perPerson -
            document.getElementById("a" + temp).value / persons) +
          "/-</div></div>";
        console.log(document.getElementById("n" + temp).value);
        console.log(document.getElementById("a" + temp).value / persons);
      } else {
        msg +=
          "<div class='row'><div class='col'>" +
          document.getElementById("n" + temp).value +
          "</div><div class='col'>To</div><div class='col'>" +
          document.getElementById("n" + index).value +
          "</div><div class='col'>=</div><div class='col'>" +
          (document.getElementById("a" + index).value / persons -
            document.getElementById("a" + temp).value / persons) +
          "/-</div></div>";
      }
    }
  }
  // msg += "</table>";
  document.getElementById("dist").innerHTML += msg;
}
