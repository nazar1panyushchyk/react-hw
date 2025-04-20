import './App.css'
import Math from './Math'

function App() {
  const image = {
    data: {
      title: "Nature",
      url: "https://imagepasal.com/wp-content/uploads/2024/06/Shey-Phoksundo-Lake-image-pasal-2024-06-27-600x400.jpg",
    },
  }

  const site = {
    data2: {
      title: "YouTube",
      url: "https://m.youtube.com/",
    },
  }

  const colors = ['Червоний', 'Синій', 'Зелений'];

  let name = 'Nazar';
  return (
    <div className='container'>
      <h1>{name}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <a href="">{site.data2.url}</a>
      <h2>{image.data.title}</h2>
      <img src={image.data.url} alt="nature"/>

      {colors.map((color, index) => (
        <ul key={index}>
          <li>{color}</li>
        </ul>
      ))}

      

      <Math />

    </div>
  )
}

export default App