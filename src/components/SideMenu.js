import React from "react";
import posed from "react-pose";

let PosedSideMenu = posed.div({
  visible: {
    width: "30%",
    height: "40vh",
    delayChildren: 200,
    staggerChildren: 50
  },
  hidden: {
    width: "0%",
    height: "0%"
  }
});

let PosedSideMenuItems = posed.li({
  show: {
    opacity: 1,
    y: 0,
    transition: ({ delay }) => {
      return { delay, duration: 500 };
    }
  },
  hide: {
    opacity: 0,
    y: 20
  }
});

let sideMenuItemsArr = [
  "First Item",
  "Second Item",
  "Third Item",
  "Fourth Link"
];

const getRandomColor = () => {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
};

const SideMenu = props => {
  return (
    <PosedSideMenu
      pose={props.show ? "visible" : "hidden"}
      style={{
        position: "absolute",
        background: "#eee",
        top: 0,
        left: 0,
        overflow: "hidden"
      }}
    >
      <h2>Side menu</h2>
      <ul>
        {sideMenuItemsArr.map((item, i) => (
          <PosedSideMenuItems
            key={item}
            pose={props.show ? "show" : "hide"}
            delay={i * 100}
            style={{
              width: "70%",
              padding: "2%",
              margin: "1%",
              background: getRandomColor()
            }}
          >
            {item}
          </PosedSideMenuItems>
        ))}
      </ul>
    </PosedSideMenu>
  );
};

export default SideMenu;
