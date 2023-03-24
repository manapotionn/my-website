function Tape({ isTop, isLeft }) {
  const baseStyle = {
    backgroundColor: "gray",
    position: "absolute",
    opacity: 0.3,
    height: "30px",
    width: isTop ? "120px" : "70px",
    transform:
      (isTop && isLeft) || (!isTop && !isLeft)
        ? "rotate(323deg)"
        : "rotate(42deg)",
    marginTop: isTop ? "10px" : "-20px",
  };

  if (isLeft) {
    baseStyle.marginLeft = isTop ? "-20px" : "-30px";
  } else {
    baseStyle.right = 0;
    baseStyle.marginRight = isTop ? "40px" : "60px";
  }

  return <div style={baseStyle}></div>;
}

export default Tape;
