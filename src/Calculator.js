import './calculator.css';
import Button from "./Button"
import Display from "./Display"

function Calc() {

  const clearDisplay = function () {
    console.log("limpei")
  }

  return (
    <div className="calculator">
      <Display value="100" />
      <Button contentButton="A/C" triple click={clearDisplay}/>
      <Button contentButton="/" />
      <Button contentButton="7" />
      <Button contentButton="8" />
      <Button contentButton="9" />
      <Button contentButton="x" />
      <Button contentButton="4" />
      <Button contentButton="5" />
      <Button contentButton="6" />
      <Button contentButton="-" />
      <Button contentButton="1" />
      <Button contentButton="2" />
      <Button contentButton="3" />
      <Button contentButton="+" />
      <Button contentButton="0" />
      <Button contentButton="," />
      <Button contentButton="=" double/>
    </div>
  );
}

export default Calc;
