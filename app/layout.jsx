import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-blog'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-blog/style.css'

export const metadata = {
  title: {
    default: 'Random',
    template: '%s - Random'
  }
}

export default async function RootLayout({ children }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <Head />
      <body>
        <Layout>
          <Navbar pageMap={await getPageMap()}>
            <ThemeSwitch />
          </Navbar>
          {children}
          <Footer>
            <small style={{ display: 'block', marginTop: '8rem' }}>
              <abbr
                title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
                style={{ cursor: 'help' }}
              >
                CC BY-NC 4.0
              </abbr>{' '}
              <time>{new Date().getFullYear()}</time> © Itsuki Aoyagi.
            </small>
          </Footer>
        </Layout>
      </body>
    </html>
  )
}
