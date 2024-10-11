module.exports = {
  viewCalculate: async function (req, res) {
    // Hier könnten weitere Logiken für die Community-Seite eingefügt werden, falls nötig
    return res.view("pages/caloriesCalculator"); // Die View-Seite für die Community wird gerender
  },
};
