import { Route, Routes } from 'react-router-dom'

import IndexPage from '@/pages/index'
import DocsPage from '@/pages/docs'
import PricingPage from '@/pages/pricing'
import BlogPage from '@/pages/blog'
import AboutPage from '@/pages/about'

const routes = [
  { path: '/', element: <IndexPage /> },
  { path: '/docs', element: <DocsPage /> },
  { path: '/pricing', element: <PricingPage /> },
  { path: '/blog', element: <BlogPage /> },
  { path: '/about', element: <AboutPage /> }
]

function App() {
  return (
    <Routes>
      {routes.map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
    </Routes>
  )
}

export default App
