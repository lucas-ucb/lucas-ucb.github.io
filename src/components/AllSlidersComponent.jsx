import SliderComponent from "./SliderComponent";

const sliderData = [
  { label: "Aroma", description: "Aroma (Out of 10) refers to the scent or fragrance of the coffee." },
  { label: "Flavor", description: "Flavor (Out of 10) is evaluated based on taste, including sweetness, bitterness, acidity, and flavor notes." },
  { label: "Aftertaste", description: "Aftertaste (Out of 10) refers to the lingering taste after swallowing the coffee." },
  { label: "Acidity", description: "Acidity (Out of 10) refers to the brightness or liveliness of the taste." },
  { label: "Body", description: "Body (Out of 10) refers to the thickness or viscosity in the mouth." },
  { label: "Balance", description: "Balance (Out of 10) measures how well all flavor components work together." },
  { label: "Uniformity", description: "Uniformity (Out of 10) is consistency cup-to-cup." },
  { label: "CleanCup", description: "CleanCup (Out of 10) means the coffee has no defects or off-flavors." },
  { label: "Sweetness", description: "Sweetness (Out of 10) can be caramel-like, fruity, or floral." },
  { label: "CupperPoints", description: "CupperPoints (Out of 10) are assigned by professional tasters." },
  { label: "TotalCupPoints", description: "TotalCupPoints (Out of 100) aggregates all other attributes." },
  { label: "Color", description: "Color refers to the visual appearance of coffee beans (green, blue-green, bluish-green)." },
  { label: "Country", description: "Country of origin affects the flavor profile of the coffee." },
  { label: "Altitude", description: "Altitude (meters) at which the coffee is grown, with min, max, and mean values." },
  // SPECIAL CASE 1 — TotalCupPoints (0–100)
  { label: "TotalCupPoints", description: "TotalCupPoints (Out of 100) aggregates all other attributes.", type: "slider", min: 0, max: 100 },

  // SPECIAL CASE 2 — Color checkbox list
  {
    label: "Color",
    description: "Color refers to the visual appearance of coffee beans.",
    type: "checkboxList",
    options: ["Green", "Bluish-Green", "Blue-Green", "Not Specified"]
  },

  // SPECIAL CASE 3 — Country scrollable list
  {
    label: "Country",
    description: "Country of origin affects the flavor profile of the coffee.",
    type: "countryList",
    countries: [
      "Brazil","Burundi","China","Colombia","Costa Rica","Ecuador","El Salvador",
      "Ethiopia","Guatemala","Haiti","Honduras","India","Indonesia","Ivory Coast",
      "Japan","Kenya","Laos","Malawi","Mexico","Mauritius","Myanmar","Nicaragua",
      "Panama","Papua New Guinea","Peru","Philippines","Rwanda","Taiwan","Tanzania",
      "Thailand","United States","Uganda","Vietnam","Zambia"
    ]
  }
];

export default function AllSlidersComponent() {
  return (
    <div className="sliderScrollContainer">
      <div className="sliderGrid">
        {sliderData.map((item) => (
          <SliderComponent
            key={item.label}
            {...item}  // sends label, description, type, min/max, etc.
          />
        ))}
      </div>
    </div>
  );
}
