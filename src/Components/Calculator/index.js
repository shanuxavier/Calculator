import React, { useState } from 'react';

function Calculator() {
  const buttons = [];
  // const [variable, setVariableFunction] = useState(defaultValue of variable);
  const [counter, setCounter] = useState(0);

  const onClick = () => {
    setCounter(counter + 1);
  }

  for (let i=0; i<10; i++) {
    buttons.push(<button onClick={onClick} key={i}>{i}</button>)
  }

  return (
    <div>
      <div>
        counter: {counter}
      </div>
      <div>
        {buttons}
      </div>
    </div>
  );
}

export default Calculator;
