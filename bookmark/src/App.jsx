import './App.css'
import Download from './components/Download/Download'
import FAQ from './components/FAQ/FAQ'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import LandingCard from './components/LandingCard/LandingCard'
import MailList from './components/MailList/MailList'

function App() {
  
  return (
    <>
      <Header />
      <LandingCard />
      <Features />
      <Download />
      <FAQ />
      <MailList />
      <Footer />
    </>
  )
}

export default App
