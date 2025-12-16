export const metadata = {
  title: 'Business Agent Logo',
  description: 'Modern professional business agent logo design',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
