let calculated = false;

function calculateCalories() {
  let gender = document.querySelector("#gender").value;
  console.log("Geschlecht:" + gender);
  let age = document.querySelector("#age").value;
  console.log("Alter:" + age);
  let weight = document.querySelector("#weight").value;
  console.log("Gewicht:" + weight);
  let activityLevel = document.querySelector("#activityLevel").value;
  console.log("Aktivitätslevel:" + activityLevel);

  if (gender === "" || age === "" || weight === "" || activityLevel === "") {
    alert("Bitte füllen Sie alle Pflichtfelder aus.");
    return false;
  }

  if (isNaN(age, weight)) {
    alert("Das Alter und Gewicht muss eine Zahl sein.");
    return false;
  }

  let baseCalories;
  if (gender === "male") {
    baseCalories = 88.362 + 13.397 * weight + 4.799 * age - 5.677 * age;
  } else {
    baseCalories = 447.593 + 9.247 * weight + 3.098 * age - 4.33 * age;
  }

  let totalCalories;
  switch (activityLevel) {
    case "sedentary":
      totalCalories = baseCalories * 1.2;
      break;
    case "lightlyActive":
      totalCalories = baseCalories * 1.375;
      break;
    case "moderatelyActive":
      totalCalories = baseCalories * 1.55;
      break;
    case "veryActive":
      totalCalories = baseCalories * 1.725;
      break;
    case "superActive":
      totalCalories = baseCalories * 1.9;
      break;
    default:
      totalCalories = baseCalories;
  }
  document.getElementById("caloriesValue").value = totalCalories;
  document.getElementById("result").innerText =
    Math.round(totalCalories) + " Kalorien pro Tag";

  calculated = true;
}

function saveCalories() {
  const totalCalories = document.getElementById("caloriesValue").value;

  let url = new URL(origin + "/updateProfile");
  let data = new FormData();
  data.append("calorieRequirement", totalCalories);

  fetch(url, {
    method: "POST",
    body: data,
  })
    .then((response) => {
      console.log("Kalorienbedarf gespeichert!");
      document.getElementById("savedMessage").innerText =
        "Dein Kalorienbedarf wurde erfolgreich gespeichert! Du findest ihn unter deinen Profileinstellungen.";
      document.getElementById("savedMessage").style.display = "block";
    })
    .catch((error) => {
      console.error("Fehler beim Speichern des Kalorienbedarfs:", error);
    });
}

function handleSaveCalories() {
  if (!calculated) {
    document.getElementById("savedMessage").innerText =
      "Du musst zuerst deine Kalorien berechnen!";
    document.getElementById("savedMessage").style.display = "block";
  } else {
    saveCalories();
  }
}
