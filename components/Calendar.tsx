import { Calendar as ICalendar } from "../type.ts"
import { range } from "../util.ts"

export function Calendar(props: { calendar: ICalendar }) {
  const { values, year, month } = props.calendar
  const padLength = values.findIndex(({ dayOfWeek }) => dayOfWeek === "Sun") % 7
  return (
    <div>
      <h2 style={{ padding: "1rem" }}>
        {year}年{month}月
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)" }}>
        {[...range({ start: 1, end: padLength })].map(() => (
          <div
            style={{
              border: "0.5px solid black",
              padding: "1rem",
              textAlign: "center",
            }}>
            {" "}
          </div>
        ))}
        {values.map(({ day, dayOfWeek }) => {
          return (
            <div
              style={{
                color:
                  dayOfWeek === "Sun"
                    ? "red"
                    : dayOfWeek === "Sat"
                    ? "blue"
                    : "black",
                border: "0.5px solid black",
                padding: "1rem",
                textAlign: "center",
              }}
              key={day}>
              {day}
            </div>
          )
        })}
      </div>
    </div>
  )
}
