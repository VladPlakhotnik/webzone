import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './components/Layouts/MainLayout'
import { MainPage } from './pages/MainPage'
import { ErrorPage } from './pages/ErrorPage'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { DocsLayout } from './components/Layouts/DocsLayout'
import { DocsContent } from './components/DocsContent'
import { DocsWelcome } from './components/DocsWelcome'
import { CVGenerator } from './pages/CVGenerator'

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/cv' element={<CVGenerator />} />
      </Route>
      <Route path='/docs' element={<DocsLayout />}>
        <Route index element={<DocsWelcome />} />
        <Route path=':subjectId/:topicId' element={<DocsContent />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/join' element={<SignUp />} />
    </Routes>
  )
}
