import { useState } from 'react'
import FirstInputSubstruct from "./components/FirstInput";
import SecondInputSubstruct from './components/SecondInput';
import Button from './components/Button';
import Result from './components/Result';



const FullCalculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const Sum = () => {
    const res = parseFloat(num1) + parseFloat(num2);
    setResult(res.toString());
  };

    return (
      <div>
            <FirstInputSubstruct num1={num1} setNum1={setNum1} />
            <SecondInputSubstruct num2={num2} setNum2={setNum2} />
            <Button Sum={Sum} />
            <Result result={result} />
      </div>
    );
  };
  export default FullCalculator;
