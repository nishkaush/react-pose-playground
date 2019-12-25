import React from "react";
import posed from "react-pose";

const CustomDiv = posed.div({
  visible: {
    opacity: 1,
    // backgroundColor: "#8956e1",
    background: "rgb(132,170,247)",
    width: "200px",
    height: "200px",
    maxWidth: "400px",
    maxHeight: "400px",
    transition: {
      background: { duration: 1000 },
      opacity: { type: "spring" },
      width: { type: "spring", stiff: 8 },
      height: { type: "spring", stiff: 9 },
      default: { duration: 500 }
    }
  },
  hidden: {
    opacity: 0.2,
    // backgroundColor: "#46c855",
    background: "rgb(198,228,139)",
    width: "100px",
    height: "100px",
    transition: props => {
      return {
        duration: 500,
        to:
          props.key === "width" || props.key === "height"
            ? props.width || props.height
            : props.to
      };
    }
  }
});

const OpacityDiv = props => {
  return (
    <CustomDiv
      pose={props.show ? "visible" : "hidden"}
      width={props.initWidth}
      height={props.initHeight}
      style={{ margin: "3% auto" }}
    >
      Hiding and showing smoothly
    </CustomDiv>
  );
};

export default OpacityDiv;
