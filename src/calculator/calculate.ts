import { CalculatorState, Job } from './CalculatorState'

export function calculateManDays(calculatorState: CalculatorState): number {
  const { bankHolidays, devTeam, sprintDays } = calculatorState
  const fullTime = devTeam
    .filter(({ job }) => job === Job.FULL_TIME)
    .reduce(
      (acc, dev) => ({
        ...acc,
        devs: acc.devs + 1,
        daysOff: acc.daysOff + dev.daysOff,
      }),
      { devs: 0, daysOff: 0 }
    )

  const halfTime = devTeam
    .filter(({ job }) => job === Job.HALF_TIME)
    .reduce(
      (acc, dev) => ({
        ...acc,
        devs: acc.devs + 0.5,
        daysOff: acc.daysOff + dev.daysOff * 0.5,
      }),
      { devs: 0, daysOff: 0 }
    )

  const initialMD = (fullTime.devs + halfTime.devs) * sprintDays

  const fullTimeSubtract = fullTime.devs
    ? fullTime.daysOff + bankHolidays * fullTime.devs
    : 0

  const halfTimeSubtract = halfTime.devs
    ? halfTime.daysOff + bankHolidays * halfTime.devs
    : 0

  return Math.floor(initialMD - fullTimeSubtract - halfTimeSubtract)
}

export function calculateCapacity(calculatorState: CalculatorState): number {
  const { bankHolidays, devTeam, sprintDays, initialCapacity } = calculatorState
  const fullTime = devTeam
    .filter(
      ({ job, capacityIncluded }) => job === Job.FULL_TIME && capacityIncluded
    )
    .reduce(
      (acc, dev) => ({
        ...acc,
        devs: acc.devs + 1,
        daysOff: acc.daysOff + dev.daysOff,
      }),
      { devs: 0, daysOff: 0 }
    )

  const halfTime = devTeam
    .filter(
      ({ job, capacityIncluded }) => job === Job.HALF_TIME && capacityIncluded
    )
    .reduce(
      (acc, dev) => ({
        ...acc,
        devs: acc.devs + 0.5,
        daysOff: acc.daysOff + dev.daysOff * 0.5,
      }),
      { devs: 0, daysOff: 0 }
    )

  const capacityPerTeamDay = initialCapacity / sprintDays
  const capacityPerDevDay = capacityPerTeamDay / (fullTime.devs + halfTime.devs)
  const capacityPerHalfTimeDevDay = capacityPerDevDay * 0.5

  const fullTimeSubtract = fullTime.devs
    ? (fullTime.daysOff + bankHolidays * fullTime.devs) * capacityPerDevDay
    : 0

  const halfTimeSubtract = halfTime.devs
    ? (halfTime.daysOff + bankHolidays * halfTime.devs) *
      capacityPerHalfTimeDevDay
    : 0

  return Math.floor(initialCapacity - fullTimeSubtract - halfTimeSubtract)
}
