import './App.css'
import AppRouter from './router'

export const App: React.FC = () => {

  return (
    <>
    <AppContent />
    </>
  )
}

const AppContent: React.FC = () => {

  return (
    <div id="app">
      <AppRouter />
    </div>
  )
}

export default App
