import { Calendar } from "../components/Calendar.tsx"
import { calendar } from "../util.ts"

export default function Home() {
  const cal = calendar({ year: 2024, month: 5 })
  return (
    <div>
      <Calendar calendar={cal} />
    </div>
  )
}
