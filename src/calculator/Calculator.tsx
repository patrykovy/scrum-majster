import React from 'react'
import Container from 'react-bootstrap/Container'
import { useCalculatorStateManager } from './CalculatorState'
import SprintSetup from './SprintSetup'
import DevTeamSetup from './DevTeamSetup'
import Result from './Result'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Examples from "./Examples";

const Calculator: React.FC = () => {
  const [state, stateManager] = useCalculatorStateManager()

  return (
    <Container className="d-flex flex-column bg-light p-4 row-gap-4">
      <SprintSetup state={state} stateManager={stateManager} />
      <Row>
        <Col sm={8}>
          <DevTeamSetup state={state} stateManager={stateManager} />
        </Col>
        <Col sm={4}>
          <Result state={state} stateManager={stateManager} />
        </Col>
      </Row>
      <Row>
        <Examples />
      </Row>
    </Container>
  )
}

export default Calculator
