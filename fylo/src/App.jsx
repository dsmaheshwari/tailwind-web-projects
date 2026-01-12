import './App.css'
import Features from './Features/Features'
import GetStarted from './GetStarted/GetStarted'
import Header from './header/header'

function App() {
  return (
    <>
      <div className='application'>
          <Header />
          <GetStarted />
          <Features />
      </div>
    </>
  )
}

export default App
