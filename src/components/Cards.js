import React from "react";
import "../styles/Cards.css";

const InputCard = () => {
  return (
    <div class="box">
      <form>
        <span class="text-center">Enter Search</span>
        <div class="input-container">
          <input type="text" required="" />
          <label>File Name</label>
        </div>
        <div class="input-container">
          <input type="mail" required="" />
          <label>Date</label>
        </div>
        <button type="button" class="btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default InputCard;
