import Link from "next/link"
import { Clock, Users, BarChart3, UserCheck, UserX, Clock8 } from "lucide-react"

export default function AdminDashboard() {
  // Datos de ejemplo para la tabla
  const attendanceData = [
    {
      id: "001",
      name: "Carlos Rodríguez",
      department: "Recursos Humanos",
      checkIn: "08:02:34",
      checkOut: "16:05:21",
      status: "on-time",
    },
    {
      id: "002",
      name: "María González",
      department: "Finanzas",
      checkIn: "08:00:12",
      checkOut: "16:00:45",
      status: "on-time",
    },
    {
      id: "003",
      name: "Juan Pérez",
      department: "Tecnología",
      checkIn: "08:32:05",
      checkOut: "16:15:30",
      status: "late",
    },
    {
      id: "004",
      name: "Ana Martínez",
      department: "Atención Ciudadana",
      checkIn: "07:55:18",
      checkOut: "16:02:40",
      status: "on-time",
    },
    {
      id: "005",
      name: "Roberto Sánchez",
      department: "Obras Públicas",
      checkIn: null,
      checkOut: null,
      status: "absent",
    },
  ]

  const getStatusBadge = (status) => {
    switch (status) {
      case "on-time":
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">A tiempo</span>
      case "late":
        return (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">Tardanza</span>
        )
      case "absent":
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">Ausente</span>
      default:
        return null
    }
  }

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-blue-600 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="h-6 w-6 text-white" />
          <h1 className="text-xl font-bold text-white">Admin - Sistema de Asistencia</h1>
        </div>

        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/admin/dashboard" className="text-white font-medium">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/admin/employees" className="text-white/80 hover:text-white">
                Empleados
              </Link>
            </li>
            <li>
              <Link href="/admin/reports" className="text-white/80 hover:text-white">
                Reportes
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white/80 hover:text-white">
                Salir
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-1 container mx-auto py-6 px-4">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Panel de Administración</h1>
            <div className="flex items-center gap-2">
              <Link
                href="/admin/reports"
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50"
              >
                <BarChart3 className="mr-2 h-4 w-4" />
                Reportes
              </Link>
              <Link
                href="/admin/employees/new"
                className="inline-flex items-center px-3 py-1.5 border border-transparent shadow-sm text-sm font-medium rounded text-white bg-blue-600 hover:bg-blue-700"
              >
                <Users className="mr-2 h-4 w-4" />
                Nuevo Empleado
              </Link>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-4 rounded-lg shadow-md border">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Empleados</p>
                  <p className="text-2xl font-bold">1,248</p>
                </div>
                <Users className="h-5 w-5 text-gray-400" />
              </div>
              <p className="text-xs text-gray-500 mt-1">+3 desde el mes pasado</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">Asistencias Hoy</p>
                  <p className="text-2xl font-bold">1,132</p>
                </div>
                <UserCheck className="h-5 w-5 text-gray-400" />
              </div>
              <p className="text-xs text-gray-500 mt-1">90.7% del total</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">Ausencias Hoy</p>
                  <p className="text-2xl font-bold">116</p>
                </div>
                <UserX className="h-5 w-5 text-gray-400" />
              </div>
              <p className="text-xs text-gray-500 mt-1">9.3% del total</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">Llegadas Tardías</p>
                  <p className="text-2xl font-bold">24</p>
                </div>
                <Clock8 className="h-5 w-5 text-gray-400" />
              </div>
              <p className="text-xs text-gray-500 mt-1">2.1% de asistencias</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md border overflow-hidden">
            <div className="px-6 py-4 border-b">
              <h2 className="text-lg font-medium">Registro de Asistencia - Hoy</h2>
              <p className="text-sm text-gray-500">
                {new Date().toLocaleDateString("es-MX", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Empleado
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Departamento
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Hora Entrada
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Hora Salida
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Estado
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {attendanceData.map((record) => (
                    <tr key={record.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-sm font-medium text-gray-700">{getInitials(record.name)}</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{record.name}</div>
                            <div className="text-sm text-gray-500">ID: {record.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{record.department}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{record.checkIn || "—"}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{record.checkOut || "—"}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(record.status)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

