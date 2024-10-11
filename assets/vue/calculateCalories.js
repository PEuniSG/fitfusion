export default {
    data() {
      return {
        gender: "",
        age: "",
        weight: "",
        activityLevel: "",
        totalCalories: 0,
        calculated: false,
        savedMessage: "",
      };
    },
    methods: {
      calculateCalories() {
        if (
          this.gender === "" ||
          this.age === "" ||
          this.weight === "" ||
          this.activityLevel === ""
        ) {
          alert("Bitte füllen Sie alle Pflichtfelder aus.");
          return false;
        }
  
        if (isNaN(this.age) || isNaN(this.weight)) {
          alert("Das Alter und Gewicht müssen Zahlen sein.");
          return false;
        }
  
        let baseCalories;
        if (this.gender === "male") {
          baseCalories =
            88.362 + 13.397 * this.weight + 4.799 * this.age - 5.677 * this.age;
        } else {
          baseCalories =
            447.593 + 9.247 * this.weight + 3.098 * this.age - 4.33 * this.age;
        }
  
        switch (this.activityLevel) {
          case "sedentary":
            this.totalCalories = baseCalories * 1.2;
            break;
          case "lightlyActive":
            this.totalCalories = baseCalories * 1.375;
            break;
          case "moderatelyActive":
            this.totalCalories = baseCalories * 1.55;
            break;
          case "veryActive":
            this.totalCalories = baseCalories * 1.725;
            break;
          case "superActive":
            this.totalCalories = baseCalories * 1.9;
            break;
          default:
            this.totalCalories = baseCalories;
        }
  
        this.$refs.caloriesValue.value = this.totalCalories;
        this.$refs.result.innerText =
          Math.round(this.totalCalories) + " Kalorien pro Tag";
  
        this.calculated = true;
      },
      saveCalories() {
        const url = new URL(origin + "/updateProfile");
        const data = new FormData();
        data.append("calorieRequirement", this.totalCalories);
  
        fetch(url, {
          method: "POST",
          body: data,
        })
          .then((response) => {
            console.log("Kalorienbedarf gespeichert!");
            this.savedMessage =
              "Dein Kalorienbedarf wurde erfolgreich gespeichert! Du findest ihn unter deinen Profileinstellungen.";
          })
          .catch((error) => {
            console.error("Fehler beim Speichern des Kalorienbedarfs:", error);
          });
      },
      handleSaveCalories() {
        if (!this.calculated) {
          this.savedMessage = "Du musst zuerst deine Kalorien berechnen!";
        } else {
          this.saveCalories();
        }
      },
    },
  };