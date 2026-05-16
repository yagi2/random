import Link from 'next/link'

export default function PostLayout({ children }) {
  return (
    <>
      <p style={{ marginBottom: '2rem' }}>
        <Link href="/">← Random</Link>
      </p>
      {children}
    </>
  )
}
