import "./sass/App.css";
import { useState } from "react";
import people from "./data.js";

function Review() {
  const [index, setIndex] = useState(0);
  const { firstname, surname, job, img, review } = people[index];
  const maxValue = people.length - 1;

  const checkLimits = (number) => {
    if (number > maxValue) return 0;
    if (number < 0) return maxValue;
    return number;
  };

  const prevPerson = () => {
    let value = checkLimits(index - 1);
    setIndex(value);
  };

  const nextPerson = () => {
    let value = checkLimits(index + 1);
    setIndex(value);
  };

  const randomValue = () => {
    let randomValue = Math.floor(Math.random() * maxValue);
    if (randomValue === index) randomValue++;
    let value = checkLimits(randomValue);
    setIndex(value);
  };

  return (
    <div>
      <img src={img} alt={firstname}></img>
      <span>
        <h3>
          {firstname} {surname}
        </h3>
        <h4>{job}</h4>
        <p>{review}</p>
      </span>
      <span>
        <button onClick={prevPerson}>←</button>
        <button onClick={nextPerson}>→</button>
      </span>
      <br />
      <br />
      <button onClick={randomValue}> SURPRISE ME</button>
    </div>
  );
}

export default Review;
