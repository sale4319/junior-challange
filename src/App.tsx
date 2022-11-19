import React, { useState } from "react";
import "./App.css";

type TPoint = {
  x: number;
  y: number;
};

function App() {
  const [points, setPoints] = useState<Array<TPoint>>([]);

  const handlePlaceCircle = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    setPoints([...points, { x: clientX, y: clientY }]);
  };

  const handleUndo = () => {
    const newPoints = [...points];
    newPoints.pop();
    setPoints(newPoints);
  };

  return (
    <>
      <button onClick={handleUndo}>Undo</button>
      <div className="app" onClick={handlePlaceCircle}>
        {points.map((point, index) => (
          <div
            key={index}
            className="point"
            style={{ left: point.x - 6 + "px", top: point.y - 10 + "px" }}
          ></div>
        ))}
      </div>
    </>
  );
}

export default App;
