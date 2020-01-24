import React from "react";
import shortid from "shortid";

const SectionHues = props => {
  return (
    <div className="section-hues">
      <h3 className="section-hues-title">This section's hues</h3>
      <p className="section-hues-subtitle">Click to copy the hex code.</p>
      <div className="section-hues-container">
        {Object.entries(props.colorChange).map(([colorName, color]) => (
          <div key={shortid.generate()} className="button-hues-container">
            <button className="button-hues">
              <span style={{ backgroundColor: color }} className="hues-display" />
              <span className="hues-info">
                <span className="section-color-name">{colorName}</span>
                <span className="color-hex">{color.toLowerCase()}</span>
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionHues;
