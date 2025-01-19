import React, { useCallback } from 'react'
import { CalculatorState, CalculatorStateManager } from './CalculatorState'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const DevTeamSetup: React.FC<{
  state: CalculatorState
  stateManager: CalculatorStateManager
}> = ({ state, stateManager }) => {
  const onFullTimeDevsChange = useCallback(
    ({ target: { value: rawValue } }: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(rawValue)
      stateManager.updateState((prev) => ({
        ...prev,
        devTeam: {
          ...prev.devTeam,
          fullTimeDevs: value,
        },
      }))
    },
    [stateManager]
  )

  const onHalfTimeDevsChange = useCallback(
    ({ target: { value: rawValue } }: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(rawValue)
      stateManager.updateState((prev) => ({
        ...prev,
        devTeam: {
          ...prev.devTeam,
          halfTimeDevs: value,
        },
      }))
    },
    [stateManager]
  )

  return (
    <div>
      <h6>Dev Team</h6>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label className="small">Full Time</Form.Label>
            <InputGroup className="input-group-sm">
              <Form.Control
                type="number"
                min={0}
                aria-describedby="fullTimeDevs"
                value={state.devTeam.fullTimeDevs}
                onChange={onFullTimeDevsChange}
              />
              <InputGroup.Text id="fullTimeDevs">devs</InputGroup.Text>
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
                value={state.devTeam.halfTimeDevs}
                onChange={onHalfTimeDevsChange}
              />
              <InputGroup.Text id="halfTimeDevs">devs</InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>
    </div>
  )
}

export default DevTeamSetup
