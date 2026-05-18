import { notFound } from 'next/navigation'
import { getPosts } from '../../get-posts'
import { POSTS_PER_PAGE, PostsList } from '../../posts-list'

export async function generateStaticParams() {
  const posts = await getPosts()
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  return Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => ({
    num: String(i + 2)
  }))
}

export async function generateMetadata({ params }) {
  const { num } = await params
  return {
    title: `Page ${num}`
  }
}

export default async function ArchivePage({ params }) {
  const { num } = await params
  const currentPage = Number(num)

  if (!Number.isInteger(currentPage) || currentPage < 2) {
    notFound()
  }

  const posts = await getPosts()
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  if (currentPage > totalPages) {
    notFound()
  }

  return (
    <>
      <h1>Random</h1>
      <PostsList posts={posts} currentPage={currentPage} />
    </>
  )
}
