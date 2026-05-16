import { PostCard } from 'nextra-theme-blog'
import { getPosts } from './get-posts'

export const metadata = {
  title: 'Random'
}

export default async function HomePage() {
  const posts = await getPosts()
  return (
    <>
      <h1>Random</h1>
      {posts.map(post => (
        <PostCard key={post.route} post={post} />
      ))}
    </>
  )
}
