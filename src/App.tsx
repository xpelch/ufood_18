import AppRouter from './router'
import './styles/App.css'
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
