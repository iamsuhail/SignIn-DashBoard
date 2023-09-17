/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const MaskGroup = ({ className, maskGroup = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb1K-1bHdbdKgxfULiCVgKS-049Nc42iSu6vr2JEds_w&s" }) => {
  return <img border-radius="2px" className={`mask-group ${className}`} alt="Mask group" src={maskGroup} />;
};

MaskGroup.propTypes = {
  maskGroup: PropTypes.string,
};
