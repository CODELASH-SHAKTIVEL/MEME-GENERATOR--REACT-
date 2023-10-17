import React from 'react'
import memesData from '../memesData.js'

export default function Meme() {

  const [meme, setMeme] = React.useState({
     toptext:"",
     bottomText:"",
     randomImage:"http://i.imgFlip.com/lbij.jpg"
  })
  const [allMemeImages , setMemeImages] = React.useState(memesData)



  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme=>({
        ...prevMeme,
        randomImage:url
    }))
    
    //  setMemeImage(memesArray[randomNumber].url)
    // const url = memesArray[randomNumber].url //<-- this is in complete
    //  console.log(url)
  }



    return (
      <main>
        <div className='form'>
          <input type="text"
            className='form--input'
          />
          <input type="text"
            className='form--input'
          />
          <button className='form--button'
            onClick={getMemeImage}>
            GET A NEW NAME IMAGE
          </button>
        </div>
         <img src={meme.randomImage} alt="" srcSet="" className='meme--image' />
       </main>
    )
}
