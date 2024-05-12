export const dayOfWeek = [
  "Mon",
  "Tue",
  "Wed",
  "Thr",
  "Fri",
  "Sat",
  "Sun",
] as const
export type DayOfWeek = (typeof dayOfWeek)[number]
export type Calendar = {
  day: number
  dayOfWeek: DayOfWeek
}[]
