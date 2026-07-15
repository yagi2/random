import Link from 'next/link'
import { formatDate } from '../mdx-components'

export const POSTS_PER_PAGE = 10

export function PostsList({ posts, currentPage }) {
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE))
  const start = (currentPage - 1) * POSTS_PER_PAGE
  const pagePosts = posts.slice(start, start + POSTS_PER_PAGE)

  return (
    <>
      {pagePosts.map(post => (
        <PostCard key={post.route} post={post} />
      ))}
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </>
  )
}

function PostCard({ post }) {
  const { title, date } = post.frontMatter
  const dateObj = date && new Date(date)

  return (
    <div>
      <h2 className="x:mt-6 x:mb-2 x:text-xl x:font-semibold">
        <Link href={post.route} className="x:no-underline!">
          {title}
        </Link>
      </h2>
      {dateObj && (
        <time
          className="x:text-sm x:dark:text-gray-400 x:text-gray-600"
          dateTime={dateObj.toISOString()}
        >
          {formatDate(dateObj)}
        </time>
      )}
    </div>
  )
}

function Pagination({ currentPage, totalPages }) {
  if (totalPages <= 1) return null

  const prevHref =
    currentPage === 2 ? '/' : `/page/${currentPage - 1}`
  const nextHref = `/page/${currentPage + 1}`

  return (
    <nav
      aria-label="Pagination"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '2rem',
        gap: '1rem'
      }}
    >
      {currentPage > 1 ? (
        <Link href={prevHref}>← 前のページ</Link>
      ) : (
        <span />
      )}
      <span style={{ opacity: 0.7 }}>
        {currentPage} / {totalPages}
      </span>
      {currentPage < totalPages ? (
        <Link href={nextHref}>次のページ →</Link>
      ) : (
        <span />
      )}
    </nav>
  )
}
