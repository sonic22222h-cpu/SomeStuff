import '@/styles/globals.css'
export const metadata = {
  title: 'SomeStuff',
  description: 'Next.js + shadcn UI + Supabase example'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}