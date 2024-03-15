import { SpriteAnimator } from "react-sprite-animator";
import PopoSprite from "../resources/blink_and_wave_popo.svg";
import { useState } from "react";

function Popo() {
  const [isMoving, setIsMoving] = useState(false);

  const onMouseEnter = () => {
    setIsMoving(true);
  };

  const onMouseLeave = () => {
    setIsMoving(false);
  };

  //todo: i think there's a bug when using stopLastFrame where shouldAnimate doesn't
  // cause it to start again. if we want to do default stuff, probably need to do some
  // custom timing to set the shouldAnimate instead

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <SpriteAnimator
        shouldAnimate={isMoving}
        sprite={PopoSprite}
        width={1280}
        height={1280}
        fps={10}
      />
    </div>
  );
}

export default Popo;
