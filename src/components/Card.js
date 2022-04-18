const Card = ({
  photo,
  stars,
  reviews,
  country,
  experience,
  price,
  openSpots,
}) => {
  let badgeText
  if (openSpots === 0) {
    badgeText = 'SOLD OUT'
  } else if (country === 'Online') {
    badgeText = 'ONLINE'
  }
  return (
    <div className='card'>
      {badgeText && <div className='card--badge'>{badgeText}</div>}
      <img className='card--image' src={`../images/${photo}`} alt='' />
      <div className='card--stats'>
        <img className='card--star' src='../images/star.png' alt='' />
        <span>{stars}</span>
        <span className='gray'>({reviews})</span>
        <span className='gray'>{country}</span>
      </div>
      <p className='card--title'>{experience}</p>
      <p>
        <span className='bold'>From {price}</span> / person
      </p>
    </div>
  )
}

export default Card
