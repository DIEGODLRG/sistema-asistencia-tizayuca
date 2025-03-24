"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Clock, CheckCircle, XCircle } from "lucide-react"

export default function CheckInPage() {
  const [employeeId, setEmployeeId] = useState("")
  const [currentTime, setCurrentTime] = useState(new Date())
  const [checkInStatus, setCheckInStatus] = useState(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleCheckIn = (e) => {
    e.preventDefault()
    if (employeeId.trim()) {
      setCheckInStatus("success")
      console.log("Check-in for employee:", employeeId, "at", currentTime.toISOString())
    } else {
      setCheckInStatus("error")
    }
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString("es-MX", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    })
  }

  const formatDate = (date) => {
    return date.toLocaleDateString("es-MX", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-blue-600 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="h-6 w-6 text-white" />
          <h1 className="text-xl font-bold text-white">Sistema de Asistencia</h1>
        </div>
        <Link href="/" className="text-white hover:underline">
          Inicio
        </Link>
      </header>

      <main className="flex-1 container mx-auto py-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden border">
          <div className="bg-blue-600 p-4 text-center">
            <h2 className="text-xl font-bold text-white">Registro de Asistencia</h2>
            <div className="text-lg font-medium mt-2 text-white">{formatTime(currentTime)}</div>
            <div className="text-sm text-white/80">{formatDate(currentTime)}</div>
          </div>

          <div className="p-6">
            {checkInStatus === null ? (
              <form onSubmit={handleCheckIn} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700">
                    Número de Empleado
                  </label>
                  <input
                    id="employeeId"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Ingrese su número de empleado"
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    required
                  />
                </div>
                <div className="flex justify-between gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
                  >
                    Entrada
                  </button>
                  <button
                    type="button"
                    className="flex-1 bg-white hover:bg-gray-50 text-blue-600 font-medium py-2 px-4 border border-blue-600 rounded-md"
                  >
                    Salida
                  </button>
                </div>
              </form>
            ) : checkInStatus === "success" ? (
              <div className="flex flex-col items-center gap-4 py-6">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-medium">¡Registro Exitoso!</h3>
                  <p className="text-gray-600">
                    Empleado: {employeeId}
                    <br />
                    Hora: {formatTime(currentTime)}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setCheckInStatus(null)
                    setEmployeeId("")
                  }}
                  className="mt-4 text-blue-600 hover:text-blue-800"
                >
                  Nuevo Registro
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 py-6">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                  <XCircle className="h-10 w-10 text-red-500" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-medium">Error en el Registro</h3>
                  <p className="text-gray-600">Por favor, verifique su número de empleado e intente nuevamente.</p>
                </div>
                <button
                  onClick={() => {
                    setCheckInStatus(null)
                    setEmployeeId("")
                  }}
                  className="mt-4 text-blue-600 hover:text-blue-800"
                >
                  Intentar Nuevamente
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

