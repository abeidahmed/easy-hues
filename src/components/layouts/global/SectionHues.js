import React from "react";
import shortid from "shortid";

const huesOpen = props => {
  const textColor = {
    color: props.colorChange["Text color"]
  };
  const headingColor = {
    color: props.colorChange["Heading color"]
  };

  if (props.huesOpen) {
    return (
      <div className="section-hues">
        <h3 style={headingColor} className="section-hues-title">
          This section's hues
        </h3>
        <p style={textColor} className="section-hues-subtitle">
          Click to copy the hex code.
        </p>
        <div className="section-hues-container">
          {Object.entries(props.colorChange).map(([colorName, colorHex]) => (
            <div key={shortid.generate()} className="button-hues-container">
              <button className="button-hues">
                <span
                  style={{
                    backgroundColor: colorHex,
                    borderColor: props.colorChange["Text color"]
                  }}
                  className="hues-display"
                />
                <span className="hues-info">
                  <span style={textColor} className="section-color-name">
                    {colorName}
                  </span>
                  <span style={textColor} className="color-hex">
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
