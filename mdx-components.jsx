import { useMDXComponents as getBlogMDXComponents } from 'nextra-theme-blog'

export function formatDate(date) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

function DateFormatter({ date }) {
  return formatDate(date)
}

const blogComponents = getBlogMDXComponents({ DateFormatter })

export function useMDXComponents(components) {
  return {
    ...blogComponents,
    ...components
  }
}
