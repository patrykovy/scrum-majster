import { CalculatorState } from './CalculatorState'

export function calculateManDays(calculatorState: CalculatorState): number {
  const { bankHolidays, devTeam, sprintDays } = calculatorState
  const initialMD =
    (devTeam.fullTimeDevs + devTeam.halfTimeDevs * 0.5) * sprintDays

  const fullTimeSubtract = devTeam.fullTimeDevs
    ? devTeam.fullTimeDaysOff + bankHolidays * devTeam.fullTimeDevs
    : 0

  const halfTimeSubtract = devTeam.halfTimeDevs
    ? devTeam.halfTimeDaysOff * 0.5 + bankHolidays * devTeam.halfTimeDevs * 0.5
    : 0

  return initialMD - fullTimeSubtract - halfTimeSubtract
}

export function calculateCapacity(calculatorState: CalculatorState): number {
  const { bankHolidays, devTeam, sprintDays, initialCapacity } = calculatorState

  const capacityPerTeamDay = initialCapacity / sprintDays
  const capacityPerDevDay =
    capacityPerTeamDay / (devTeam.fullTimeDevs + devTeam.halfTimeDevs * 0.5)
  const capacityPerHalfTimeDevDay = capacityPerDevDay * 0.5

  const fullTimeSubtract = devTeam.fullTimeDevs
    ? (devTeam.fullTimeDaysOff + bankHolidays * devTeam.fullTimeDevs) *
      capacityPerDevDay
    : 0

  const halfTimeSubtract = devTeam.halfTimeDevs
    ? (devTeam.halfTimeDaysOff + bankHolidays * devTeam.halfTimeDevs * 0.5) *
      capacityPerHalfTimeDevDay
    : 0

  return initialCapacity - fullTimeSubtract - halfTimeSubtract
}
