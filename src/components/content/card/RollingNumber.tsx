import { useEffect, useRef, useState } from "react";
import { nums } from "../../../lib/constants";

const RollingNumber = ({ digit }: { digit: number }) => {
  const [hovered, setHovered] = useState(false);
  const digitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const digitContainer = digitRef.current;
    if (!digitContainer) return;
    if (hovered) {
      digitContainer.style.animation = "5s rolling-number forwards";
    } else {
      digitContainer.style.animation = "1s rolling-number ease-out ";
      setTimeout(() => {
        digitContainer.style.animation = "none";
      }, 1000);
    }
  }, [hovered]);

  return (
    <div
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      ref={digitRef}
      className={`group flex flex-col h-[360px] _${digit.toString()}`}
    >
      {nums.map(num =>
        num === digit ? (
          <span key={num} className=''>
            {num}
          </span>
        ) : (
          <span key={num}>{num}</span>
        )
      )}
    </div>
  );
};

export default RollingNumber;
