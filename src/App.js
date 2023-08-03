import { Card, Col, Row, Typography } from "antd";
import styles from "./components/componentStyles.module.scss";
import { NumberButton } from "./components/numberButton";
import { ActionButton } from "./components/actionButton";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
const { Text } = Typography;

function App() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [operation, setOperation] = useState();
  const [result, setResult] = useState(0);

  const sumar = (a, b) => {
    setResult(b + a);
    setValue1(b + a);
  };
  const restar = (a, b) => {
    setResult(b - a);
    setValue1(b - a);
  };
  const multiplicar = (a, b) => {
    setResult(b * a);
    setValue1(b * a);
  };
  const dividir = (a, b) => {
    setResult(b / a);
    setValue1(b / a);
  };

  const calculate = (a, b) => {
    if (operation === "+") {
      sumar(a, b);
    } else if (operation === "-") {
      restar(a, b);
    } else if (operation === "*") {
      multiplicar(a, b);
    } else if (operation === "/") {
      dividir(a, b);
    }
  };

  const updateValue = (input) => {
    setValue2(value1);
    setValue1(input);
  };

  useEffect(() => {
    console.log("resutl " + result);
  }, [result]);
  useEffect(() => {
    console.log("value1 " + value1);
  }, [value1]);

  return (
    <div>
      <Row className={styles.row}>
        <Card className={styles.result}>
          <Text className={styles.resultText}>{value1}</Text>
        </Card>
      </Row>
      <Row className={styles.row}>
        <Card className={styles.card}>
          <Row>
            <Col>
              <NumberButton
                style={styles.buttonNumber}
                num={7}
                onClick={() => updateValue(7)}
              />
            </Col>
            <Col>
              <NumberButton
                style={styles.buttonNumber}
                num={8}
                onClick={() => updateValue(8)}
              />
            </Col>
            <Col>
              <NumberButton
                style={styles.buttonNumber}
                num={9}
                onClick={() => updateValue(9)}
              />
            </Col>
            <Col>
              <NumberButton style={styles.buttonAction} num={"DEL"} />
            </Col>
          </Row>
          <Row>
            <Col>
              <NumberButton
                style={styles.buttonNumber}
                num={4}
                onClick={() => updateValue(4)}
              />
            </Col>
            <Col>
              <NumberButton
                style={styles.buttonNumber}
                num={5}
                onClick={() => updateValue(5)}
              />
            </Col>
            <Col>
              <NumberButton
                style={styles.buttonNumber}
                num={6}
                onClick={() => updateValue(6)}
              />
            </Col>
            <Col>
              <NumberButton
                style={styles.buttonNumber}
                num={"+"}
                onClick={() => setOperation("+")}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <NumberButton
                style={styles.buttonNumber}
                num={1}
                onClick={() => updateValue(1)}
              />
            </Col>
            <Col>
              <NumberButton
                style={styles.buttonNumber}
                num={2}
                onClick={() => updateValue(2)}
              />
            </Col>
            <Col>
              <NumberButton
                style={styles.buttonNumber}
                num={3}
                onClick={() => updateValue(3)}
              />
            </Col>
            <Col>
              <NumberButton
                style={styles.buttonNumber}
                num={"-"}
                onClick={() => setOperation("-")}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <NumberButton style={styles.buttonNumber} num={"."} />
            </Col>
            <Col>
              <NumberButton
                style={styles.buttonNumber}
                num={0}
                onClick={() => updateValue(0)}
              />
            </Col>
            <Col>
              <NumberButton
                style={styles.buttonNumber}
                num={"/"}
                onClick={() => setOperation("/")}
              />
            </Col>
            <Col>
              <NumberButton
                style={styles.buttonNumber}
                num={"x"}
                onClick={() => setOperation("*")}
              />
            </Col>
          </Row>
          <Row className={styles.rowResult}>
            <Col>
              <NumberButton style={styles.buttonReset} num={"RESET"} />
            </Col>
            <Col>
              <NumberButton
                style={styles.buttonEqual}
                num={"="}
                onClick={() => calculate(value1, value2)}
              />
            </Col>
          </Row>
        </Card>
      </Row>
    </div>
  );
}

export default App;
