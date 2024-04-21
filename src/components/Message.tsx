import { useState } from "react";

function Message() {
  const [startX, setStartX] = useState(null);
  const [marginLeft, setMarginLeft] = useState(0);

  function handleMouseDown(event: any) {
    setStartX(event.clientX); // Сохраняем начальную позицию по оси X
  }

  function handleMouseMove(event: any) {
    if (startX !== null) {
      const distance = event.clientX - startX; // Вычисляем расстояние, на которое переместили мышь
      if (distance < 0 && distance > -101) {
        setMarginLeft(distance);
      }
    }
  }

  function handleMouseUp() {
    // Сбрасываем начальную позицию после отпускания кнопки мыши

    if (marginLeft !== -100) {
      setMarginLeft(0);
      setStartX(null);
    }
  }

  return (
    <div
      className="w-full pt-5 pb-5 p-10 bg-white mt-5 text-xl flex justify-center items-start flex-col duration-200"
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
