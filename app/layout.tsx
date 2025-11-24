import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gizlilik ve KVKK',
  description: 'Gizlilik politikası ve KVKK aydınlatma metni',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body
        style={{
          margin: 0,
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
          backgroundColor: '#f5f5f5',
        }}
      >
        <main
          style={{
            maxWidth: 800,
            margin: '40px auto',
            padding: '24px',
            backgroundColor: 'white',
            borderRadius: 12,
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          }}
        >
          {children}
        </main>
      </body>
    </html>
  )
}
