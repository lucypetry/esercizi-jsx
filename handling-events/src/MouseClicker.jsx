import React from "react";

const MouseClicker = () => {
  const handleClick = (event) => {
    console.log(event.target.name);
  };

  const handleButtonClick = (event) => {
    if (event.target.tagName === "IMG") {
      console.log(event.target.src);
      return;
    }

    console.log(event.currentTarget.name);
  };

  return (
    <div>
      {/* First button */}
      <button name="one" onClick={handleClick}>
        Click Me
      </button>

      {/* Second button with an image inside */}
      <button name="two" onClick={handleButtonClick}>
        <img src="https://via.placeholder.com/50" alt="Placeholder" />
      </button>
    </div>
  );
};

export default MouseClicker;
