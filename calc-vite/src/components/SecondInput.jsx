import React from 'react';

const SecondInputSubstruct = ({ num2, setNum2 }) => {
  return (
    <div>
         <input
            type="number"
            placeholder="Введіть друге число"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
    </div>
  );
};
export default SecondInputSubstruct ;