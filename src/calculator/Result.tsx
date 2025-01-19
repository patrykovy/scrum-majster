import React, { useCallback, useMemo } from 'react'
import { CalculatorState, CalculatorStateManager } from './CalculatorState'
import { calculateCapacity, calculateManDays } from './calculate'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

const Result: React.FC<{
  state: CalculatorState
  stateManager: CalculatorStateManager
}> = ({ state, stateManager }) => {
  const manDays = useMemo(() => calculateManDays(state), [state])
  const actualCapacity = useMemo(() => calculateCapacity(state), [state])
  const onReset = useCallback(() => {
    stateManager.resetDefaults()
  }, [stateManager])

  if (state.devTeam.fullTimeDevs < 1 && state.devTeam.halfTimeDevs < 1)
    return null

  return (
    <div>
      <h6>Result</h6>
      <Row>
        <Col>
          <Row>
            <Col>
              <Form.Group className="input-group-sm">
                <Form.Label className="small">Man Days</Form.Label>
                <InputGroup className="input-group-sm">
                  <Form.Control readOnly value={manDays.toFixed(2)} />
                  <InputGroup.Text className="small">MD</InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="input-group-sm">
                <Form.Label className="small">Actual Capacity</Form.Label>
                <InputGroup className="input-group-sm">
                  <Form.Control readOnly value={actualCapacity.toFixed(2)} />
                  <InputGroup.Text className="small">SP</InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
        </Col>
        <Col></Col>
        <Col></Col>
        <Col className="d-flex justify-content-end align-items-end">
          <Button variant="secondary btn-sm" onClick={onReset}>
            Reset
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default Result
