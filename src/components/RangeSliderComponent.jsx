import React from 'react';

function RangeSlider({ name, label, minRange, maxRange, step, minVal, maxVal, onChange }) {
  // Convert current state values to numbers, falling back to range limits if empty
  const currentMin = parseFloat(minVal || minRange);
  const currentMax = parseFloat(maxVal || maxRange);
  
  // Calculate the percentage position of the filled range for CSS
  const totalRange = maxRange - minRange;
  const minPercent = ((currentMin - minRange) / totalRange) * 100;
  const maxPercent = ((currentMax - minRange) / totalRange) * 100;
  
  const trackStyle = {
    left: `${minPercent}%`,
    width: `${maxPercent - minPercent}%`,
  };

  const handleMinChange = (e) => {
    const newMin = parseFloat(e.target.value);
    // Prevent min from exceeding max
    const finalMin = Math.min(newMin, currentMax);
    onChange({
        target: {
            name: `${name}Min`,
            value: finalMin.toString(),
        }
    });
  };

  const handleMaxChange = (e) => {
    const newMax = parseFloat(e.target.value);
    // Prevent max from falling below min
    const finalMax = Math.max(newMax, currentMin);
    onChange({
        target: {
            name: `${name}Max`,
            value: finalMax.toString(),
        }
    });
  };

  return (
    <div className="range-slider-group" key={name}>
      <label>
        {label} ({minRange} - {maxRange})
      </label>
      <div className="slider-values">
        <span>Min: <b>{currentMin}</b></span>
        <span>Max: <b>{currentMax}</b></span>
      </div>
      <div className="range-slider-container">
        {/* The filled portion of the track */}
        <div className="slider-track" style={trackStyle}></div>
        
        {/* Input 1: Controls the minimum value */}
        <input
          type="range"
          min={minRange}
          max={maxRange}
          step={step}
          value={currentMin}
          onChange={handleMinChange}
          className="slider-min"
        />

        {/* Input 2: Controls the maximum value */}
        <input
          type="range"
          min={minRange}
          max={maxRange}
          step={step}
          value={currentMax}
          onChange={handleMaxChange}
          className="slider-max"
        />
      </div>
    </div>
  );
}

export default RangeSlider;