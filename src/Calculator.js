import React, { Component } from "react"
import './calculator.css';
import Button from "./Button"
import Display from "./Display"


const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

export default class Calc extends Component {

  state = {...initialState}

  constructor(props) {
    super(props)
    this.addDigit = this.addDigit.bind(this)
    this.addOperator = this.addOperator.bind(this)
    this.clearMemory = this.clearMemory.bind(this)
  }

  addDigit(n) {
    if (n === "." && this.state.displayValue.includes(".")) {
      return
    }

    const clearDisplay = this.state.displayValue === "0"
      || this.state.clearDisplay
    const currentValue = clearDisplay ? "" : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({ displayValue, clearDisplay: false })

    if (n !== ".") {
      const i = this.state.current
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[i] = newValue
      this.setState({ values })
    }
  }

  addOperator(operation) {
    if(this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true})
    } else {
      const equals = operation === "="
      const currentOperation = this.state.operation

      const values = [...this.state.values]
      try {
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
      } catch(e) {
        values[0] = values[0] = this.state.values[0]
      }
      values[1] = 0

      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1, 
        clearDisplay: !equals,
        values
      })
    }
  }

  clearMemory() {
    this.setState( {...initialState})
  }

  render() {
    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
        <Button contentButton="A/C" click={this.clearMemory} triple />
        <Button contentButton="/" click={this.addOperator}/>
        <Button contentButton="7" click={this.addDigit} />
        <Button contentButton="8" click={this.addDigit} />
        <Button contentButton="9" click={this.addDigit} />
        <Button contentButton="*" click={this.addOperator}/>
        <Button contentButton="4" click={this.addDigit} />
        <Button contentButton="5" click={this.addDigit} />
        <Button contentButton="6" click={this.addDigit} />
        <Button contentButton="-" click={this.addOperator}/>
        <Button contentButton="1" click={this.addDigit} />
        <Button contentButton="2" click={this.addDigit} />
        <Button contentButton="3" click={this.addDigit} />
        <Button contentButton="+" click={this.addOperator}/>
        <Button contentButton="0" click={this.addDigit} double />
        <Button contentButton="." click={this.addDigit}/>
        <Button contentButton="=" click={this.addOperator}/>
      </div>
    );
  }
}
