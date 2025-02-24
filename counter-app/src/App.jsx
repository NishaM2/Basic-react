import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div> 
      <Button count={count} setCount={setCount}></Button>
    </div>
  )
}

// component
// here props is a input state
function Button(props) {

  function onButtonClick() {
    props.setCount(props.count + 1);
  }

  return React.createElement(
    'button',
    { onClick: onButtonClick },
    `Counter ${props.count}`
  );
}

export default App
