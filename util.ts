import { Temporal } from "npm:temporal-polyfill@0.2.4"
import { Calendar, dayOfWeek } from "./type.ts"

export function* range({ start, end }: { start: number; end: number }) {
  let i = start
  while (true) {
    if (i === end) return i
    yield i
    i += 1
  }
}

export function calendar({
  year,
  month,
}: {
  year: number
  month: number
}): Calendar {
  const cal = new Temporal.Calendar("iso8601")
  const yearMonth = Temporal.PlainYearMonth.from({ year, month })
  return [...range({ start: 1, end: cal.daysInMonth(yearMonth) })].map(
    (day) => {
      const date = Temporal.PlainDate.from({
        year,
        month,
        day,
      })
      return {
        day,
        dayOfWeek: dayOfWeek[date.dayOfWeek - 1],
      }
    },
    []
  )
}
