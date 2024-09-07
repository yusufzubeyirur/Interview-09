import React, { useEffect, useState } from "react";
import "./styles.css";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
      <GrowingButton />
    </div>
  );
}

const GrowingButton = () => {
  const [size, setSize] = useState(100);
  const [isGrowing, setIsGrowing] = useState(true);

  const minSize = 100;
  const maxSize = 300;
  const sizeChangeRate = 2;

  useEffect(() => {
    const interval = setInterval(() => {
      setSize((prevSize) => {
        if (isGrowing) {
          return prevSize + sizeChangeRate <= maxSize
            ? prevSize + sizeChangeRate
            : maxSize;
        } else {
          return prevSize - sizeChangeRate >= minSize
            ? prevSize - sizeChangeRate
            : minSize;
        }
      });
    }, 50); // 50ms aralıklarla boyut değişimi

    return () => clearInterval(interval);
  }, [isGrowing]);

  const handleClick = () => {
    setIsGrowing(!isGrowing); // Butona tıklandığında büyüme/küçülme durumu tersine döner
  };

  return (
    <button
      onClick={handleClick}
      style={{
        width: size,
        height: size,
        transition: "width 0.1s ease , height 0.1s ease",
      }}
    >
      {isGrowing ? "Küçült" : "Büyük"}
    </button>
  );
};

export default App;
