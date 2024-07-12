import React from 'react';

  const FirstInputSubstruct = ({ num1, setNum1 }) => {
  return (
    <div>
     <h2>Suma</h2>
          <input
            type="number"
            placeholder="Введіть перше число"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
    </div>
  );

};
export default FirstInputSubstruct