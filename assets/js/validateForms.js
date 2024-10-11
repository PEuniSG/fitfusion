function validateMealForm() {
  // Pflichtfelder prüfen
  var name = document.forms["mealForm"]["name"].value;
  var description = document.forms["mealForm"]["description"].value;
  var protein = document.forms["mealForm"]["protein"].value;
  var calories = document.forms["mealForm"]["calories"].value;
  var fat = document.forms["mealForm"]["fat"].value;
  var ingredientOne = document.forms["mealForm"]["ingredientOne"].value;

  if (
    name === "" ||
    description === "" ||
    protein === "" ||
    calories === "" ||
    fat === "" ||
    ingredientOne === ""
  ) {
    alert("Bitte füllen Sie alle Pflichtfelder aus.");
    return false; // Verhindert das Absenden des Formulars
  }

  // Überprüfen, ob 'amountExercises' eine Zahl ist
  if (isNaN(protein, calories, fat)) {
    alert("Die Anzahl der Übungen muss eine Zahl sein.");
    return false;
  }

  return true; // Erlaubt das Absenden des Formulars, wenn die Validierung erfolgreich ist
}

function validateFitnessplanForm() {
  // Pflichtfelder prüfen
  var name = document.forms["fitnessplanForm"]["name"].value;
  var amountExercises =
    document.forms["fitnessplanForm"]["amountExercises"].value;
  var description = document.forms["fitnessplanForm"]["description"].value;
  var exerciseOne = document.forms["fitnessplanForm"]["exerciseOne"].value;

  if (
    name === "" ||
    amountExercises === "" ||
    description === "" ||
    exerciseOne === ""
  ) {
    alert("Bitte füllen Sie alle Pflichtfelder aus.");
    return false; // Verhindert das Absenden des Formulars
  }

  // Überprüfen, ob 'amountExercises' eine Zahl ist
  if (isNaN(amountExercises)) {
    alert("Die Anzahl der Übungen muss eine Zahl sein.");
    return false;
  }

  return true; // Erlaubt das Absenden des Formulars, wenn die Validierung erfolgreich ist
}

function validateFitnessplanCategoryForm() {
  // Pflichtfelder prüfen
  var name = document.forms["formCategoryFitnessplan"]["name"].value;
  var ordernumber =
    document.forms["formCategoryFitnessplan"]["ordernumber"].value;

  if (name === "" || ordernumber === "") {
    alert("Bitte füllen Sie alle Pflichtfelder aus.");
    return false; // Verhindert das Absenden des Formulars
  }
  // Überprüfen, ob 'ordernumber' eine Zahl ist
  if (isNaN(ordernumber)) {
    alert("Die Anzahl der Übungen muss eine Zahl sein.");
    return false;
  }
  return true; // Erlaubt das Absenden des Formulars, wenn die Validierung erfolgreich ist
}

function formCategoryMeal() {
  // Pflichtfelder prüfen
  var name = document.forms["formCategoryMeal"]["name"].value;
  var ordernumber = document.forms["formCategoryMeal"]["ordernumber"].value;

  if (name === "" || ordernumber === "") {
    alert("Bitte füllen Sie alle Pflichtfelder aus.");
    return false; // Verhindert das Absenden des Formulars
  }
  // Überprüfen, ob 'ordernumber' eine Zahl ist
  if (isNaN(ordernumber)) {
    alert("Die Anzahl der Übungen muss eine Zahl sein.");
    return false;
  }
  return true; // Erlaubt das Absenden des Formulars, wenn die Validierung erfolgreich ist
}
