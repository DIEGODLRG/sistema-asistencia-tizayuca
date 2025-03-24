import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-blue-600 px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">Sistema de Asistencia - Ayuntamiento de Tizayuca</h1>
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/login" className="text-white hover:underline">
                Iniciar Sesión
              </Link>
            </li>
            <li>
              <Link href="/admin/dashboard" className="text-white hover:underline">
                Administración
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-1 container mx-auto py-8 px-4">
        <section className="grid gap-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Sistema de Registro de Asistencia</h2>
            <p className="text-lg text-gray-600">
              Una solución moderna y confiable para el registro de asistencia de los empleados del Ayuntamiento de
              Tizayuca
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="font-medium mb-2">Registro Fácil</h3>
              <p className="text-sm text-gray-600">Registro rápido mediante códigos QR o credenciales NFC</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="font-medium mb-2">Gestión de Personal</h3>
              <p className="text-sm text-gray-600">Administración completa de empleados y departamentos</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="font-medium mb-2">Reportes Detallados</h3>
              <p className="text-sm text-gray-600">Informes personalizados de asistencia y puntualidad</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="font-medium mb-2">Configuración Flexible</h3>
              <p className="text-sm text-gray-600">Adaptable a las necesidades específicas de cada departamento</p>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Link
              href="/check-in"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
            >
              Registrar Asistencia
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-6 px-4">
        <div className="container mx-auto text-center text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} Dirección de Innovación y Modernización Gubernamental - Ayuntamiento de
            Tizayuca
          </p>
        </div>
      </footer>
    </div>
  )
}

