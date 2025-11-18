import { useState } from "react";

export default function SliderComponent({
  label,
  description,
  type = "slider",
  min = 0,
  max = 10,
  options = [],
  countries = [],
}) {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const [show, setShow] = useState(false);

  return (
    <div className="rangeSlider">
      {/* HEADER ROW */}
      <div className="labelRow">
        <p>{label}</p>
        <div className="toggleGroup">
          <input
            type="checkbox"
            checked={show}
            onChange={() => setShow(!show)}
          />
        </div>
      </div>

      {/* CONTENT THAT SHOWS WHEN CHECKED */}
      <div className={`sliderContent ${show ? "visible" : "hidden"}`}>
        {/* ------------------------------- */}
        {/* TYPE 1 — SLIDER (default)       */}
        {/* ------------------------------- */}
        {type === "slider" && (
          <>
            <div className="sliderTrack">
              <div className="sliderBaseTrack"></div>

              <div
                className="sliderRangeHighlight"
                style={{
                  left: `${((minValue - min) / (max - min)) * 100}%`,
                  width: `${((maxValue - minValue) / (max - min)) * 100}%`,
                }}
              ></div>

              <input
                type="range"
                min={min}
                max={max}
                step="1"
                value={minValue}
                onChange={(e) =>
                  setMinValue(Math.min(Number(e.target.value), maxValue))
                }
                className="thumb thumbLeft"
              />

              <input
                type="range"
                min={min}
                max={max}
                step="1"
                value={maxValue}
                onChange={(e) =>
                  setMaxValue(Math.max(Number(e.target.value), minValue))
                }
                className="thumb thumbRight"
              />
            </div>

            <div className="valueRow">
              <span>{minValue}</span>
              <span>{maxValue}</span>
            </div>
          </>
        )}

        {/* ------------------------------- */}
        {/* TYPE 2 — CHECKBOX LIST (Color)  */}
        {/* ------------------------------- */}
        {type === "checkboxList" && (
          <div className="checkboxList">
            {options.map((opt) => (
              <label key={opt} className="checkboxItem">
                <input type="radio" name={`${label}-radio-group`} />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        )}

        {/* -------------------------------------- */}
        {/* TYPE 3 — SCROLLABLE COUNTRY LIST       */}
        {/* -------------------------------------- */}
        {type === "countryList" && (
          <div className="countryList">
            <ul>
              {countries.map((c) => (
                <li key={c}>
                  <label>
                    <input type="radio" name={`${label}-radio-group`} />
                    <span>{c}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
