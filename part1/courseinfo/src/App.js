import React from "react";

const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

const Content = ({ title, content }) => {
  return (
    <p>
      {title} {content}
    </p>
  );
};

const Total = ({ total }) => {
  let sum = 0;
  total.forEach((n) => (sum += n));
  return <p>Number exercises {sum}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header title={course} />
      <Content title={part1} content={exercises1} />
      <Content title={part2} content={exercises2} />
      <Content title={part3} content={exercises3} />
      <Total total={[exercises1, exercises2, exercises3]} />
    </div>
  );
};

export default App;
