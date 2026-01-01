"use client"

import { useState } from "react"

type ClassInfo = {
  name: string
  instructor: string
}

type ScheduleSlot = ClassInfo | null

interface DaySchedule {
  [time: string]: ScheduleSlot
}

interface WeekSchedule {
  [day: string]: DaySchedule
}

const schedule: WeekSchedule = {
  Monday: {
    "6:00 AM": { name: "Full Body Strength & Conditioning", instructor: "Andrew" },
    "8:00 AM": { name: "Full Body Strength & Conditioning", instructor: "Andrew" },
    "12:00 PM": { name: "Full Body Strength & Conditioning", instructor: "Andrew" },
    "5:00 PM": { name: "Full Body Strength & Conditioning", instructor: "Andrew" },
    "7:00 PM": { name: "Full Body Strength & Conditioning", instructor: "Taya" },
  },
  Tuesday: {
    "7:00 AM": { name: "Full Body Strength & Conditioning", instructor: "Taya" },
    "6:00 PM": { name: "Full Body Strength & Conditioning", instructor: "Taya" },
    "7:00 PM": { name: "Youth Girls General Fitness", instructor: "Taya" },
  },
  Wednesday: {
    "6:00 AM": { name: "Full Body Strength & Conditioning", instructor: "Andrew" },
    "8:00 AM": { name: "Full Body Strength & Conditioning", instructor: "Andrew" },
    "12:00 PM": { name: "Full Body Strength & Conditioning", instructor: "Andrew" },
    "5:00 PM": { name: "Full Body Strength & Conditioning", instructor: "Andrew" },
  },
  Thursday: {
    "7:00 AM": { name: "Full Body Strength & Conditioning", instructor: "Andrew" },
    "6:00 PM": { name: "Full Body Strength & Conditioning", instructor: "Taya" },
    "7:00 PM": { name: "Youth Girls General Fitness", instructor: "Taya" },
  },
  Friday: {
    "6:00 AM": { name: "Full Body Strength & Conditioning", instructor: "Andrew" },
    "8:00 AM": { name: "Full Body Strength & Conditioning", instructor: "Andrew" },
    "12:00 PM": { name: "Full Body Strength & Conditioning", instructor: "Andrew" },
    "4:00 PM": { name: "Youth General Fitness", instructor: "Andrew" },
    "5:00 PM": { name: "Full Body Strength & Conditioning", instructor: "Andrew" },
  },
  Saturday: {
    "8:00 AM": { name: "Full Body Strength & Conditioning", instructor: "Taya" },
    "9:00 AM": { name: "Full Body Strength & Conditioning", instructor: "Taya" },
    "11:00 AM": { name: "HYROX Training", instructor: "Andrew" },
  },
  Sunday: {
    "10:00 AM": { name: "Full Body Strength & Conditioning", instructor: "Joe" },
    "12:00 PM": { name: "Youth General Fitness", instructor: "Andrew" },
    "1:00 PM": { name: "Youth Sport Performance", instructor: "Andrew" },
  },
}

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const shortDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const times = [
  "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
  "6:00 PM", "7:00 PM"
]

const getClassColor = (className: string) => {
  if (className.includes("HYROX")) return "bg-orange-100 border-orange-300 text-orange-800 hover:bg-orange-200"
  if (className.includes("Youth Girls")) return "bg-pink-100 border-pink-300 text-pink-800 hover:bg-pink-200"
  if (className.includes("Youth")) return "bg-blue-100 border-blue-300 text-blue-800 hover:bg-blue-200"
  return "bg-emerald-100 border-emerald-300 text-emerald-800 hover:bg-emerald-200"
}

const getShortName = (className: string) => {
  if (className.includes("HYROX")) return "HYROX"
  if (className.includes("Youth Girls")) return "Youth Girls"
  if (className.includes("Youth Sport")) return "Youth Sport"
  if (className.includes("Youth General")) return "Youth Fitness"
  if (className.includes("Strength")) return "S&C"
  return className
}

export function Schedule() {
  const [selectedDay, setSelectedDay] = useState<string>("Monday")

  const getDayClasses = (day: string) => {
    const daySchedule = schedule[day] || {}
    return Object.entries(daySchedule)
      .sort((a, b) => {
        const timeA = times.indexOf(a[0])
        const timeB = times.indexOf(b[0])
        return timeA - timeB
      })
  }

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Weekly Class Schedule
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our group classes led by expert trainers. All fitness levels welcome.
          </p>
        </div>

        <div className="lg:hidden">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {days.map((day, index) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedDay === day
                    ? "bg-primary text-primary-foreground"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {shortDays[index]}
              </button>
            ))}
          </div>
          <div className="space-y-3">
            {getDayClasses(selectedDay).length > 0 ? (
              getDayClasses(selectedDay).map(([time, classInfo]) => (
                <div
                  key={time}
                  className={`p-4 rounded-xl border-2 ${getClassColor(classInfo!.name)}`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">{classInfo!.name}</p>
                      <p className="text-sm opacity-80">with {classInfo!.instructor}</p>
                    </div>
                    <span className="text-sm font-medium bg-white/50 px-2 py-1 rounded">
                      {time}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted-foreground py-8">No classes scheduled for {selectedDay}</p>
            )}
          </div>
        </div>

        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-2 text-left font-semibold text-slate-600 border-b-2 border-slate-200 w-20 text-sm">
                  Time
                </th>
                {days.map((day, index) => (
                  <th
                    key={day}
                    className="p-2 text-center font-semibold text-slate-600 border-b-2 border-slate-200 text-sm"
                  >
                    {shortDays[index]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {times.map((time) => {
                const hasAnyClass = days.some((day) => schedule[day]?.[time])
                if (!hasAnyClass) return null
                
                return (
                  <tr key={time} className="border-b border-slate-100">
                    <td className="p-2 font-medium text-slate-600 whitespace-nowrap text-sm">
                      {time}
                    </td>
                    {days.map((day) => {
                      const classInfo = schedule[day]?.[time]
                      return (
                        <td key={`${day}-${time}`} className="p-1">
                          {classInfo && (
                            <div
                              className={`group relative p-1.5 rounded-md border text-center text-xs cursor-pointer transition-all ${getClassColor(
                                classInfo.name
                              )}`}
                              title={`${classInfo.name} with ${classInfo.instructor}`}
                            >
                              <p className="font-semibold leading-tight">{getShortName(classInfo.name)}</p>
                              <p className="opacity-0 group-hover:opacity-100 text-[10px] transition-opacity absolute inset-x-0 -bottom-5 bg-slate-800 text-white rounded px-1 py-0.5 z-10 whitespace-nowrap">
                                w/{classInfo.instructor}
                              </p>
                            </div>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-emerald-100 border border-emerald-300"></div>
            <span className="text-slate-600">S&C = Strength & Conditioning</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-orange-100 border border-orange-300"></div>
            <span className="text-slate-600">HYROX Training</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-blue-100 border border-blue-300"></div>
            <span className="text-slate-600">Youth Programs</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-pink-100 border border-pink-300"></div>
            <span className="text-slate-600">Youth Girls</span>
          </div>
        </div>
      </div>
    </section>
  )
}
