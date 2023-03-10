import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './components/Layouts/MainLayout'
import { MainPage } from './pages/MainPage'
import { ErrorPage } from './pages/ErrorPage'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { DocsLayout } from './components/Layouts/DocsLayout'
import { DocsContent } from './components/DocsContent'

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path='docs' element={<DocsLayout />}>
          <Route index element={<DocsContent />} />
          <Route path=':id' element={<DocsContent />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/join' element={<SignUp />} />
    </Routes>
  )
}
