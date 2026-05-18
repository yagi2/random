import nextra from 'nextra'

const withNextra = nextra({})

export default withNextra({
  reactStrictMode: true,
  cleanDistDir: true,
  async redirects() {
    return [
      {
        source: '/page/1',
        destination: '/',
        permanent: true
      }
    ]
  }
})
