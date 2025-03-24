import "./globals.css"

export const metadata = {
  title: "Sistema de Asistencia - Ayuntamiento de Tizayuca",
  description: "Sistema de registro de asistencia para empleados",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  )
}

