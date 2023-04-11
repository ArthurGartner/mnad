import React, { Component } from "react";
import { keyframes } from "@emotion/react";

// Create the keyframes
const fillAnimation = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

// Styling
const styles = {
  loadingBar: {
    // background: "linear-gradient(to right, #e66465, #9198e5)",
    background: "linear-gradient(to right, #6EF195, #00E3FD)",
    animation: `${fillAnimation} 3s ease-in-out`,
    height: "30px",
    width: "100%",
    borderRadius: "30px",
  },
};

class AnimatedLoadingBar extends Component {
  render() {
    return <div style={styles.loadingBar} />;
  }
}

export default AnimatedLoadingBar;
