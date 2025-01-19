import React, { useMemo } from 'react'

export type DevTeam = {
  fullTimeDevs: number
  fullTimeDaysOff: number
  halfTimeDevs: number
  halfTimeDaysOff: number
}

export type CalculatorState = {
  sprintDays: number
  initialCapacity: number
  bankHolidays: number
  devTeam: DevTeam
}

export type CalculatorStateManager = {
  updateState: (
    factory: (currentState: CalculatorState) => CalculatorState
  ) => void
  resetDefaults: () => void
}

const INITIAL_STATE: CalculatorState = {
  sprintDays: 10,
  initialCapacity: 20,
  bankHolidays: 0,
  devTeam: {
    fullTimeDevs: 5,
    fullTimeDaysOff: 0,
    halfTimeDevs: 1,
    halfTimeDaysOff: 0,
  },
}

export function useCalculatorStateManager(): [
  CalculatorState,
  CalculatorStateManager,
] {
  const [state, setState] = React.useState<CalculatorState>(INITIAL_STATE)

  const stateManager = useMemo(
    () => ({
      updateState: (
        factory: (currentState: CalculatorState) => CalculatorState
      ) => {
        setState((prev) => factory(prev))
      },
      resetDefaults: () => {
        setState(INITIAL_STATE)
      },
    }),
    [setState]
  )

  return [state, stateManager]
}
