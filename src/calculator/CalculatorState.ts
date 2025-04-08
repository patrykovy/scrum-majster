import React, { useMemo } from 'react'

export type DevTeam = {
  fullTimeDevs: number
  fullTimeDaysOff: number
  halfTimeDevs: number
  halfTimeDaysOff: number
}

export enum Job {
  FULL_TIME = 'full-time',
  HALF_TIME = 'half-time',
}

export type Dev = {
  id: number
  name: string
  job: Job
  daysOff: number
  capacityIncluded: boolean
}

export type CalculatorState = {
  sprintDays: number
  initialCapacity: number
  bankHolidays: number
  devTeam: Dev[]
}

export type CalculatorStateManager = {
  updateState: (
    factory: (currentState: CalculatorState) => CalculatorState
  ) => void
  resetDefaults: () => void
}

const INITIAL_STATE: CalculatorState = {
  sprintDays: 10,
  initialCapacity: 18,
  bankHolidays: 0,
  devTeam: [
    {
      id: 1,
      name: 'Tomek',
      job: Job.FULL_TIME,
      daysOff: 0,
      capacityIncluded: true,
    },
    {
      id: 2,
      name: 'Michal',
      job: Job.FULL_TIME,
      daysOff: 0,
      capacityIncluded: true,
    },
    {
      id: 3,
      name: 'Jakub',
      job: Job.HALF_TIME,
      daysOff: 0,
      capacityIncluded: true,
    },
    {
      id: 4,
      name: 'Mirek',
      job: Job.FULL_TIME,
      daysOff: 0,
      capacityIncluded: true,
    },
    {
      id: 5,
      name: 'Kacper',
      job: Job.HALF_TIME,
      daysOff: 0,
      capacityIncluded: true,
    },
    {
      id: 6,
      name: 'Rafał',
      job: Job.FULL_TIME,
      daysOff: 0,
      capacityIncluded: false,
    },
  ],
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
