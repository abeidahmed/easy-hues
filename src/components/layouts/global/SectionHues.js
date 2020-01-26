import React, { Component } from "react";
import shortid from "shortid";

class SectionHues extends Component {
  state = {
    value: "",
    copied: false
  };

  onClick = async hexCode => {
    let mark = "";
    this.setState({ value: hexCode });

    mark = await document.createElement("input");
    mark.value = this.state.value;

    document.body.appendChild(mark);
    mark.select();
    document.execCommand("copy");

    this.setState({ copied: true });

    if (this.state.copied) {
      document.body.removeChild(mark);
    }
  };

  hideTooltip = async () => {
    if (this.state.copied) {
      await this.setState({
        copied: false
      });
    }
  };

  render() {
    const { heading, text } = this.props.colorChange;

    const camelCaseToWord = word => {
      const toArray = word.replace(/([A-Z])/g, " $1").toLowerCase();
      const splitArray = toArray.split(" ");
      return splitArray[0][0].toUpperCase() + toArray.slice(1);
    };

    // Check if inherited colors has it's own property.
    // Return heading color if found else return text color.
    const propCheck = (property, element) => {
      if (property.hasOwnProperty(element)) {
        return heading;
      } else {
        return text;
      }
    };

    if (this.props.huesOpen) {
      return (
        <div className="section-hues">
          <h3
            style={{ color: propCheck(this.props.colorChange, heading) }}
            className="section-hues-title"
          >
            This section's hues
          </h3>
          <p style={{ color: text }} className="section-hues-subtitle">
            Click to copy the hex code.
          </p>
          <div className="section-hues-container">
            {/** Loop the key value pair of colors and display colorName and colorHex */}
            {Object.entries(this.props.colorChange).map(([colorName, colorHex]) => (
              <div key={shortid.generate()} className="button-hues-container">
                <button
                  onClick={() => this.onClick(colorHex.toLowerCase())}
                  onMouseLeave={this.hideTooltip}
                  className="button-hues"
                >
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
    }

    return null;
  }
}

export default SectionHues;
