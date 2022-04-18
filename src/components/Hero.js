const Hero = ({ title, subtitle }) => {
  return (
    <section className='hero'>
      <img className='hero--image' src='../images/hero.png' alt='' />
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  )
}

export default Hero
