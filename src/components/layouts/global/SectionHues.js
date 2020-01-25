import React from "react";
import shortid from "shortid";

const huesOpen = props => {
  const { heading, text } = props.colorChange;

  const camelCaseToWord = word => {
    const toArray = word.replace(/([A-Z])/g, " $1").toLowerCase();
    const splitArray = toArray.split(" ");
    return splitArray[0][0].toUpperCase() + toArray.slice(1);
  };

  if (props.huesOpen) {
    return (
      <div className="section-hues">
        <h3 style={{ color: heading }} className="section-hues-title">
          This section's hues
        </h3>
        <p style={{ color: text }} className="section-hues-subtitle">
          Click to copy the hex code.
        </p>
        <div className="section-hues-container">
          {Object.entries(props.colorChange).map(([colorName, colorHex]) => (
            <div key={shortid.generate()} className="button-hues-container">
              <button className="button-hues">
                <span
                  style={{
                    backgroundColor: colorHex,
                    borderColor: text
                  }}
                  className="hues-display"
                />
                <span className="hues-info">
                  <span style={{ color: text }} className="section-color-name">
                    {camelCaseToWord(colorName)}
                  </span>
                  <span style={{ color: text }} className="color-hex">
                    {colorHex.toLowerCase()}
                  </span>
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

const SectionHues = props => {
  return huesOpen(props);
};

export default SectionHues;
