import React from "react";
import PropTypes from "prop-types";

const LogoComponent = (props) => {
  return (
    <div>
      <img
        src={props.Logo}
        alt="Logo"
        className="w-48 h-48 lg:w-[300px] lg:h-[300px]"
      />
    </div>
  );
};

LogoComponent.propTypes = {
  Logo: PropTypes.node.isRequired,
};

export default LogoComponent;
