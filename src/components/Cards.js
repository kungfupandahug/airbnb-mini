import Card from './Card'
import data from './data'

const Cards = () => {
  return (
    <section className='cards'>
      {data.map((d) => (
        <Card key={d.id} {...d} />
      ))}
    </section>
  )
}

export default Cards
