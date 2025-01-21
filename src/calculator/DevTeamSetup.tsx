import React, { useCallback } from 'react'
import { CalculatorState, CalculatorStateManager, Dev } from './CalculatorState'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Table from 'react-bootstrap/Table'

const DevTeamSetup: React.FC<{
  state: CalculatorState
  stateManager: CalculatorStateManager
}> = ({ state, stateManager }) => {
  return (
    <div>
      <h6>Dev Team</h6>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Days off</th>
            <th>Include in capacity</th>
          </tr>
        </thead>
        <tbody>
          {state.devTeam
            .sort((a, b) => a.id - b.id)
            .map((dev) => (
              <DevSetup key={dev.id} dev={dev} stateManager={stateManager} />
            ))}
        </tbody>
      </Table>
    </div>
  )
}

const DevSetup: React.FC<{
  dev: Dev
  stateManager: CalculatorStateManager
}> = ({ dev, stateManager }) => {
  const onDevDaysOffChange = useCallback(
    ({ target: { value: rawValue } }: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(rawValue)
      stateManager.updateState((prev) => ({
        ...prev,
        devTeam: [
          ...prev.devTeam.filter((it) => it.id !== dev.id),
          {
            ...dev,
            daysOff: value < 0 ? 0 : value,
          },
        ],
      }))
    },
    [stateManager, dev]
  )

  const onDevIncludeInCapacityChange = useCallback(
    ({ target: { checked } }: React.ChangeEvent<HTMLInputElement>) => {
      stateManager.updateState((prev) => ({
        ...prev,
        devTeam: [
          ...prev.devTeam.filter((it) => it.id !== dev.id),
          {
            ...dev,
            capacityIncluded: checked,
          },
        ],
      }))
    },
    [stateManager, dev]
  )

  return (
    <tr key={dev.id}>
      <td>{dev.name}</td>
      <td>{dev.job}</td>
      <td>
        <InputGroup className="input-group-sm" style={{ width: '150px' }}>
          <Form.Control
            type="number"
            min={0}
            value={dev.daysOff}
            onChange={onDevDaysOffChange}
          />
          <InputGroup.Text>days</InputGroup.Text>
        </InputGroup>
      </td>
      <td>
        <Form.Check
          type="checkbox"
          checked={dev.capacityIncluded}
          onChange={onDevIncludeInCapacityChange}
        />
      </td>
    </tr>
  )
}

export default DevTeamSetup
