"use client"

import { useState } from "react"
import Link from "next/link"
import { Clock } from "lucide-react"

export default function LoginPage() {
  const [employeeId, setEmployeeId] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempt with:", employeeId)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <Link href="/" className="absolute top-4 left-4 flex items-center gap-2 text-blue-600">
        <Clock className="h-5 w-5" />
        <span className="font-medium">Sistema de Asistencia</span>
      </Link>

      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-md overflow-hidden border">
          <div className="p-6 space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">Iniciar Sesión</h2>
              <p className="mt-2 text-gray-600">Ingrese sus credenciales para acceder al sistema</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
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
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ingrese su contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
              >
                Ingresar
              </button>
            </form>

            <div className="text-center text-sm">
              <Link href="/forgot-password" className="text-blue-600 hover:text-blue-800">
                ¿Olvidó su contraseña?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

