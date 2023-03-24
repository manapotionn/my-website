function Tape({ isTop, isLeft, isCenter, isRotated }) {
  const transform = () => {
    if (isRotated && !isCenter) {
      if ((isTop && isLeft) || (!isTop && !isLeft)) {
        return "rotate(323deg)";
      } else {
        return "rotate(42deg)";
      }
    } else {
      const degrees = Math.floor(Math.random() * 5);
      return "rotate(" + degrees + "deg)";
    }
  };

  const baseStyle = {
    backgroundColor: "#4F77AA",
    position: "absolute",
    opacity: 0.5,
    height: "30px",
    width: isTop ? "120px" : "70px",
    transform: transform(),
    marginTop: isRotated
      ? isTop
        ? "10px"
        : "-20px"
      : isTop
      ? "-15px"
      : "-20px",
  };

  if (!isCenter) {
    if (isLeft) {
      baseStyle.marginLeft = isTop ? "-20px" : "-30px";
    } else {
      baseStyle.right = 0;
      baseStyle.marginRight = isTop ? "40px" : "60px";
    }
  } else {
    baseStyle.left = "50%";
    baseStyle.marginTop = "-20px";
  }

  return <div style={baseStyle}></div>;
}

export default Tape;
