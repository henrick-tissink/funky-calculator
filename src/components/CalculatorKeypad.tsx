import { Button, Col, Grid } from "@mantine/core";
import '../styles/calculatorkeypad.scss'
import { FunctionComponent } from "react";

export const CalculatorKeypad: FunctionComponent<{ keypadClicked: (arg: string) => void }> = ({ keypadClicked }) => {
    return(
    <div id="calculator-keypad">
        <Grid gutter="xs">
            <Col span={3}><Button onClick={() => keypadClicked('clear')}>C</Button></Col>
            <Col span={3}><Button onClick={() => keypadClicked('plusMinus')}>+/-</Button></Col>
            <Col span={3}><Button onClick={() => keypadClicked('percent')}>%</Button></Col>
            <Col span={3}><Button onClick={() => keypadClicked('divide')}>/</Button></Col>
            <Col span={3}><Button onClick={() => keypadClicked('9')}>9</Button></Col>
            <Col span={3}><Button onClick={() => keypadClicked('8')}>8</Button></Col>
            <Col span={3}><Button onClick={() => keypadClicked('7')}>7</Button></Col>
            <Col span={3}><Button onClick={() => keypadClicked('multiply')}>X</Button></Col>
            <Col span={3}><Button onClick={() => keypadClicked('6')}>6</Button></Col>
            <Col span={3}><Button onClick={() => keypadClicked('5')}>5</Button></Col>
            <Col span={3}><Button onClick={() => keypadClicked('4')}>4</Button></Col>
            <Col span={3}><Button onClick={() => keypadClicked('minus')}>-</Button></Col>
            <Col span={3}><Button onClick={() => keypadClicked('3')}>3</Button></Col>
            <Col span={3}><Button onClick={() => keypadClicked('2')}>2</Button></Col>
            <Col span={3}><Button onClick={() => keypadClicked('1')}>1</Button></Col>
            <Col span={3}><Button onClick={() => keypadClicked('plus')}>+</Button></Col>
            <Col span={6}><Button onClick={() => keypadClicked('0')} fullWidth>0</Button></Col>
            <Col span={3}><Button onClick={() => keypadClicked('decimal')}>.</Button></Col>
            <Col span={3}><Button onClick={() => keypadClicked('equals')}>=</Button></Col>
        </Grid>
    </div>);
}