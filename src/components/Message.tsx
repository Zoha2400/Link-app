import React, { useState } from "react";

function Message() {
  const [startX, setStartX] = useState(null);
  const [marginLeft, setMarginLeft] = useState(0);

  function handleMouseDown(event) {
    setStartX(event.clientX); // Сохраняем начальную позицию по оси X
  }

  function handleMouseMove(event) {
    if (startX !== null) {
      const distance = event.clientX - startX; // Вычисляем расстояние, на которое переместили мышь
      if (distance < 0 && distance > -100) {
        setMarginLeft(distance);
      }
    }
  }

  function handleMouseUp() {
    setStartX(null); // Сбрасываем начальную позицию после отпускания кнопки мыши
    setMarginLeft(0);
  }

  return (
    <div
      className="w-full pt-5 pb-5 p-10 bg-white mt-5 text-xl flex justify-center items-start flex-col duration-300"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseOut={handleMouseUp}
      style={{ marginLeft: `${marginLeft}px` }}
    >
      <div className="text">Message</div>
      <div className="date text-sm">14:15</div>
    </div>
  );
}

export default Message;
