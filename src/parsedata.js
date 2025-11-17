import csv from "csvtojson";
import fs from "fs";

csv()
  .fromFile("./data/coffee_data.csv")
  .then((jsonArray) => {
    const cleaned = jsonArray.map(row => {
      const newRow = {};
      for (const key in row) {
        if (key && key.trim() !== "") {
          // keep empty values — just trim them
          newRow[key.trim()] = row[key].trim();
        }
      }
      return newRow;
    });

    fs.writeFileSync(
      "./data/coffee_data.json",
      JSON.stringify(cleaned, null, 2)
    );

    console.log("Cleaned JSON saved → ./data/coffee_data.json");
  });
