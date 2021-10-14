import '../styles/calculatordisplay.scss'
import { FunctionComponent, useEffect, useState } from "react";

export const CalculatorDisplay: FunctionComponent<{ value: string }> = ({ value }) => { 
    const [displayValue, setDisplayValue] = useState<string>('')

    useEffect(() => {
        setDisplayValue(value)
    }, [value])
    
    return(
    <div id="calculator-display">
        <span id="display-text">
            { displayValue }
        </span>
    </div>);
}