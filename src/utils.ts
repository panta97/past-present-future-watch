export interface PositionProps {
  left: string;
  top: string;
  transform: string;
}

const calculateProps = (
  size: number,
  radius: number,
  angle: number,
  element: HTMLSpanElement,
  rotAngle: number
): PositionProps => {
  const translation = size / 2;
  const scale = translation * radius;

  let posY = Math.sin(angle) * scale + translation;
  posY += -element.getBoundingClientRect().height / 2;
  let posX = Math.cos(angle) * scale + translation;
  posX += -element.getBoundingClientRect().width / 2;
  let rotate = ((rotAngle + Math.PI) * 180) / Math.PI;

  return {
    left: `${posX}px`,
    top: `${posY}px`,
    transform: `rotate(${rotate}deg)`,
  };
};

export { calculateProps };
