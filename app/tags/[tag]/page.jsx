import { PostCard } from 'nextra-theme-blog'
import { notFound } from 'next/navigation'
import { getPosts, getTags } from '../../get-posts'

export async function generateMetadata({ params }) {
  const { tag } = await params
  const decodedTag = decodeURIComponent(tag)
  return {
    title: `Posts tagged "${decodedTag}"`
  }
}

export async function generateStaticParams() {
  const tags = await getTags()
  return [...new Set(tags)].map(tag => ({ tag }))
}

export default async function TagPage({ params }) {
  const { tag } = await params
  const decodedTag = decodeURIComponent(tag)
  const posts = await getPosts()
  const filteredPosts = posts.filter(post =>
    post.frontMatter.tags?.includes(decodedTag)
  )
  if (filteredPosts.length === 0) {
    notFound()
  }
  return (
    <>
      <h1>{`Posts tagged "${decodedTag}"`}</h1>
      {filteredPosts.map(post => (
        <PostCard key={post.route} post={post} />
      ))}
    </>
  )
}
