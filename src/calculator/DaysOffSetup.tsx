import React, { useCallback } from 'react'
import { CalculatorState, CalculatorStateManager } from './CalculatorState'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const DaysOffSetup: React.FC<{
  state: CalculatorState
  stateManager: CalculatorStateManager
}> = ({ state, stateManager }) => {
  const onFullTimeDaysChange = useCallback(
    ({ target: { value: rawValue } }: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(rawValue)
      stateManager.updateState((prev) => ({
        ...prev,
        devTeam: {
          ...prev.devTeam,
          fullTimeDaysOff: value,
        },
      }))
    },
    [stateManager]
  )

  const onHalfTimeDaysChange = useCallback(
    ({ target: { value: rawValue } }: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(rawValue)
      stateManager.updateState((prev) => ({
        ...prev,
        devTeam: {
          ...prev.devTeam,
          halfTimeDaysOff: value,
        },
      }))
    },
    [stateManager]
  )

  return (
    <div>
      <h6>Days Off</h6>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label className="small">Full Time</Form.Label>
            <InputGroup className="input-group-sm">
              <Form.Control
                type="number"
                min={0}
                aria-describedby="fullTimeDevs"
                value={state.devTeam.fullTimeDaysOff}
                onChange={onFullTimeDaysChange}
              />
              <InputGroup.Text id="fullTimeDevs">days</InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label className="small">Half Time</Form.Label>
            <InputGroup className="input-group-sm">
              <Form.Control
                type="number"
                min={0}
                aria-describedby="halfTimeDevs"
                value={state.devTeam.halfTimeDaysOff}
                onChange={onHalfTimeDaysChange}
              />
              <InputGroup.Text id="halfTimeDevs">days</InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>
    </div>
  )
}

export default DaysOffSetup
