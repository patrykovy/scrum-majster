import React from 'react'
import Container from 'react-bootstrap/Container'
import { useCalculatorStateManager } from './CalculatorState'
import SprintSetup from './SprintSetup'
import DevTeamSetup from './DevTeamSetup'
import DaysOffSetup from './DaysOffSetup'
import Result from './Result'

const Calculator: React.FC = () => {
  const [state, stateManager] = useCalculatorStateManager()

  return (
    <Container className="d-flex flex-column bg-light p-4 row-gap-4">
      <SprintSetup state={state} stateManager={stateManager} />
      <div className="d-flex justify-content-between">
        <DevTeamSetup state={state} stateManager={stateManager} />
        <DaysOffSetup state={state} stateManager={stateManager} />
      </div>
      <Result state={state} stateManager={stateManager} />
    </Container>
  )
}

export default Calculator
