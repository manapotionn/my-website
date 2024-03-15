import { SpriteAnimator } from "react-sprite-animator";
import SunnySprite from "./resources/sunny_lamp.svg";
import { useState } from "react";

function Sunny() {
  const [isMoving, setIsMoving] = useState(false);

  const onMouseEnter = () => {
    setIsMoving(true);
  };

  const onMouseLeave = () => {
    setIsMoving(false);
  };

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <SpriteAnimator
        shouldAnimate={isMoving}
        sprite={SunnySprite}
        width={300}
        height={310}
        fps={2}
      />
    </div>
  );
}

export default Sunny;
