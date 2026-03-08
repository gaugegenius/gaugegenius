"use client"

import { useState } from "react"

export default function AgeCalculator() {

  const [birthDate, setBirthDate] = useState("")
  const [result, setResult] = useState<any>(null)

  function calculateAge() {

    if (!birthDate) return

    const birth = new Date(birthDate)
    const today = new Date()

    let years = today.getFullYear() - birth.getFullYear()
    let months = today.getMonth() - birth.getMonth()
    let days = today.getDate() - birth.getDate()

    if (days < 0) {
      months--
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0)
      days += prevMonth.getDate()
    }

    if (months < 0) {
      years--
      months += 12
    }

    const diffTime = today.getTime() - birth.getTime()

    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    const totalWeeks = Math.floor(totalDays / 7)
    const totalMonths = years * 12 + months

    // Next birthday calculation
    const nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate())

    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1)
    }

    const daysToBirthday = Math.ceil(
      (nextBirthday.getTime() - today.getTime()) /
      (1000 * 60 * 60 * 24)
    )

    setResult({
      years,
      months,
      days,
      totalMonths,
      totalWeeks,
      totalDays,
      daysToBirthday
    })
  }

  return (
    <div className="space-y-6">

      <div className="flex gap-3">

        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="border rounded-md px-4 py-2"
        />

        <button
          onClick={calculateAge}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Calculate
        </button>

      </div>

      {result && (

        <div className="space-y-4">

          <div className="text-xl font-semibold">
            Your Age
          </div>

          <div className="grid grid-cols-3 gap-4">

            <div className="border rounded-lg p-4 text-center">
              <div className="text-2xl font-bold">{result.years}</div>
              <div className="text-sm text-gray-500">Years</div>
            </div>

            <div className="border rounded-lg p-4 text-center">
              <div className="text-2xl font-bold">{result.months}</div>
              <div className="text-sm text-gray-500">Months</div>
            </div>

            <div className="border rounded-lg p-4 text-center">
              <div className="text-2xl font-bold">{result.days}</div>
              <div className="text-sm text-gray-500">Days</div>
            </div>

          </div>

          <div className="grid grid-cols-3 gap-4">

            <div className="border rounded-lg p-4 text-center">
              <div className="text-xl font-semibold">{result.totalMonths}</div>
              <div className="text-sm text-gray-500">Total Months</div>
            </div>

            <div className="border rounded-lg p-4 text-center">
              <div className="text-xl font-semibold">{result.totalWeeks}</div>
              <div className="text-sm text-gray-500">Total Weeks</div>
            </div>

            <div className="border rounded-lg p-4 text-center">
              <div className="text-xl font-semibold">{result.totalDays}</div>
              <div className="text-sm text-gray-500">Total Days</div>
            </div>

          </div>

          <div className="border rounded-lg p-4 text-center bg-gray-50">

            <div className="text-lg font-semibold">
              Next Birthday
            </div>

            <div className="text-gray-600">
              {result.daysToBirthday} days remaining
            </div>

          </div>

        </div>

      )}

    </div>
  )
}