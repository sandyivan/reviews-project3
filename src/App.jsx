import { useState } from 'react'
import data from './data'

//icons
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const App = () => {
  const [index, setIndex] = useState(0)
  const { id, name, job, image, text } = data[index]

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0
    }
    if (number < 0) {
      return data.length - 1
    }
    return number
  }

  const nextPerson = () => {
    setIndex((currentIndex) => {
      // incrementing by 1 everytime we click next button
      const newIndex = currentIndex + 1
      return checkNumber(newIndex)
    })
  }

  const prevPerson = () => {
    setIndex((currentIndex) => {
      // decrementing by 1
      const newIndex = currentIndex - 1
      return checkNumber(newIndex)
    })
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * data.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    setIndex(checkNumber(randomNumber))
  }

  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <button onClick={prevPerson} className='prev-btn'>
            <FaChevronLeft />
          </button>
          <button onClick={nextPerson} className='next-btn'>
            <FaChevronRight />
          </button>
        </div>
        <button onClick={randomPerson} className='btn btn-hipster'>
          suprise me
        </button>
      </article>
    </main>
  )
}
export default App
