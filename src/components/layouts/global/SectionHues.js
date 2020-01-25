import React from "react";
import shortid from "shortid";

const huesOpen = props => {
  const text = {
    color: props.colorChange["Text color"]
  };

  const heading = {
    color: props.colorChange["Heading color"]
  };

  if (props.huesOpen) {
    return (
      <div className="section-hues">
        <h3 style={heading} className="section-hues-title">
          This section's hues
        </h3>
        <p style={text} className="section-hues-subtitle">
          Click to copy the hex code.
        </p>
        <div className="section-hues-container">
          {Object.entries(props.colorChange).map(([colorName, color]) => (
            <div key={shortid.generate()} className="button-hues-container">
              <button className="button-hues">
                <span
                  style={{
                    backgroundColor: color,
                    borderColor: props.colorChange["Text color"]
                  }}
                  className="hues-display"
                />
                <span className="hues-info">
                  <span style={text} className="section-color-name">
                    {colorName}
                  </span>
                  <span style={text} className="color-hex">
                    {color.toLowerCase()}
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
