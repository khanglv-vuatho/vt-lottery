import { Route, Routes } from 'react-router-dom'

import { Suspense } from 'react'
import { CircularProgress } from '@nextui-org/react'
import { lazy } from 'react'

const IndexPage = lazy(() => import('@/pages/index'))
const InvalidPage = lazy(() => import('./pages/invalid'))

const routes = [
  { path: '/', element: <IndexPage /> },
  { path: '/invalid', element: <InvalidPage /> }
]

function App() {
  return (
    <Suspense
      fallback={
        <div className='flex h-dvh w-full items-center justify-center'>
          <CircularProgress
            classNames={{
              svg: 'h-8 w-8 text-primary-blue'
            }}
          />
        </div>
      }
    >
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  )
}

export default App
