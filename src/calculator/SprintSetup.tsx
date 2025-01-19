import React, { useCallback } from 'react'
import { CalculatorState, CalculatorStateManager } from './CalculatorState'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const SprintSetup: React.FC<{
  state: CalculatorState
  stateManager: CalculatorStateManager
}> = ({ state, stateManager }) => {
  const onSprintDaysChange = useCallback(
    ({ target: { value: rawValue } }: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(rawValue)
      stateManager.updateState((prev) => ({
        ...prev,
        sprintDays: value >= 0 ? value : 0,
      }))
    },
    [stateManager]
  )

  const onInitialCapacityChange = useCallback(
    ({ target: { value: rawValue } }: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(rawValue)
      stateManager.updateState((prev) => ({
        ...prev,
        initialCapacity: value >= 0 ? value : 0,
      }))
    },
    [stateManager]
  )

  const onBankHolidaysChange = useCallback(
    ({ target: { value: rawValue } }: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(rawValue)
      stateManager.updateState((prev) => ({
        ...prev,
        bankHolidays: value >= 0 ? value : 0,
      }))
    },
    [stateManager]
  )

  return (
    <div>
      <h6>Sprint Setup</h6>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label className="small">Days in sprint</Form.Label>
            <InputGroup className="input-group-sm">
              <Form.Control
                type="number"
                min={0}
                aria-describedby="sprintDays"
                value={state.sprintDays}
                onChange={onSprintDaysChange}
              />
              <InputGroup.Text id="sprintDays">days</InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label className="small">Initial Capacity</Form.Label>
            <InputGroup className="input-group-sm">
              <Form.Control
                type="number"
                min={0}
                aria-describedby="initialCapacity"
                value={state.initialCapacity}
                onChange={onInitialCapacityChange}
              />
              <InputGroup.Text id="initialCapacity">SP</InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label className="small">Bank Holidays</Form.Label>
            <InputGroup className="input-group-sm">
              <Form.Control
                type="number"
                min={0}
                aria-describedby="bankHolidays"
                value={state.bankHolidays}
                onChange={onBankHolidaysChange}
              />
              <InputGroup.Text id="bankHolidays">days</InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>
    </div>
  )
}

export default SprintSetup
