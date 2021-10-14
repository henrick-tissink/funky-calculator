import { FunctionComponent, useState } from 'react'
import '../styles/calculator.scss'
import { CalculatorDisplay } from './CalculatorDisplay'
import { CalculatorKeypad } from './CalculatorKeypad'

export const Calculator: FunctionComponent = () => {
    const [displayValue, setDisplayValue] = useState<string>('0')
    const [placeholder, setPlaceholder] = useState<string>('')
    const [operator, setOperator] = useState<string>('')
    const [hasEvaluated, setHasEvaluated] = useState<boolean>(false)

    const keypadClicked = function (key: string): void {
        switch(key) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if (hasEvaluated) {
                    setDisplayValue(key)
                    setHasEvaluated(false)
                } else {
                    setDisplayValue(displayValue === '0' ? key : displayValue + key);
                }
                break;
            case 'clear':
                setDisplayValue('0')
                setPlaceholder('')
                setOperator('')
                break;
            case 'plusMinus':
                setDisplayValue((-1 * parseFloat(displayValue)).toString())
                break;
            case 'decimal':
                if (!displayValue.includes('.'))
                    setDisplayValue(displayValue + '.')
                break;
            case 'percent':
                setPlaceholder((parseFloat(displayValue) / 100).toString())
                setDisplayValue('0')
                break;
            case 'divide':
            case 'multiply':
            case 'minus':
            case 'plus':
                setPlaceholder(displayValue)
                setOperator(key)
                setDisplayValue('0')
                break;
            case 'equals':
                switch(operator) {
                    case 'plus':
                        setDisplayValue((parseFloat(placeholder) + parseFloat(displayValue)).toString())
                        break;
                    case 'minus':
                        setDisplayValue((parseFloat(placeholder) - parseFloat(displayValue)).toString())
                        break;
                    case 'multiply':
                        setDisplayValue((parseFloat(placeholder) * parseFloat(displayValue)).toString())
                        break;
                    case 'divide':
                        setDisplayValue((parseFloat(placeholder) / parseFloat(displayValue)).toString())
                        break;
                }
                setHasEvaluated(true)
                break;
        }
    }

    return (
    <div id="calculator">
        <CalculatorDisplay value={displayValue} />
        <CalculatorKeypad keypadClicked={keypadClicked} />
    </div>);
}

export default Calculator