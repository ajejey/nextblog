import './globals.css'

export const metadata = {
  title: 'My Blog',
  description: 'A simple blog built with Next.js and Tailwind CSS',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">{children}</body>
    </html>
  )
}
