import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero
        title='Online Experiences'
        subtitle='Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.'
      />
      <Cards />
    </>
  )
}

export default App
