import { getPosts } from './get-posts'
import { PostsList } from './posts-list'

export const metadata = {
  title: 'Random'
}

export default async function HomePage() {
  const posts = await getPosts()
  return (
    <>
      <h1>Random</h1>
      <PostsList posts={posts} currentPage={1} />
    </>
  )
}
