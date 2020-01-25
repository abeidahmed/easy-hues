import React from "react";

const Sidebar = props => {
  return (
    <div className={props.isOpen ? "sidebar-container active" : "sidebar-container"}>
      <div className="sidebar-container-inner">
        <h3 className="sidebar-title">Select a color palette</h3>
        {props.heroColors.map(color => (
          <button
            className={props.activeId === color.id ? "active" : null}
            onClick={() => {
              props.handleColorChange(color.id);
              props.handleActive(color.id);
            }}
            key={color.id}
          >
            <span style={{ backgroundColor: color.headingAccent }}></span>
            <span style={{ backgroundColor: color.buttonBackground }}></span>
            <span style={{ backgroundColor: color.text }}></span>
            <span style={{ backgroundColor: color.sectionBackground }}></span>
            <span style={{ backgroundColor: color.heading }}></span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
