import 'nextra-theme-blog/style.css'
import Prism from 'prism-react-renderer/prism'

(typeof global !== "undefined" ? global : window).Prism = Prism

require("prismjs/components/prism-kotlin")
require("prismjs/components/prism-swift")
require("prismjs/components/prism-java")

export default function Nextra({ Component, pageProps }) {
  return <><Component {...pageProps} /></>
}