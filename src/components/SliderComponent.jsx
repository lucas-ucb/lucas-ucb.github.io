import { useState } from "react";

function SliderComponent() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10);
  const [showSlider, setShowSlider] = useState(true);
  
  return (
    <div className="rangeSlider">
      <div className="labelRow">
        <p>Rating Range</p>
        <div className="toggleGroup">
          <input
            type="checkbox"
            id="toggleSlider"
            checked={showSlider}
            onChange={() => setShowSlider(!showSlider)}
          />
        </div>
      </div>
      

      {showSlider && (
        <>
          <div className="sliderTrack">
            <div className="sliderBaseTrack"></div>
            <div
              className="sliderRangeHighlight"
              style={{
                left: `${(minValue / 10) * 100}%`,
                width: `${((maxValue - minValue) / 10) * 100}%`,
              }}
            ></div>

            <input
              type="range"
              min="0"
              max="10"
              step="1"
              value={minValue}
              onChange={(e) =>
                setMinValue(Math.min(Number(e.target.value), maxValue))
              }
              className="thumb thumbLeft"
            />

            <input
              type="range"
              min="0"
              max="10"
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
    </div>
  );
}

export default SliderComponent;
