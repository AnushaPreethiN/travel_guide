import './index.css'

const Home = props => {
  const {details} = props
  const {name, imageUrl, description} = details
  return (
    <li className="list-container">
      <img src={imageUrl} className="image" alt={name} />
      <h1 className="name">{name}</h1>
      <p className="desc">{description}</p>
    </li>
  )
}

export default Home
