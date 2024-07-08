import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet architecto quod laborum quam voluptate totam accusantium laboriosam? Cumque optio possimus aperiam. Laborum perferendis quia eos, molestiae quasi eius error!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, beatae velit? Odit veniam sequi nam dicta, voluptatem reiciendis eligendi quaerat! Debitis laborum enim quia quis? Illum magnam itaque dicta temporibus!
            Numquam magni quo iste? 
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum reprehenderit, eveniet itaque voluptatibus ut id, mollitia ipsum in delectus laudantium quo aut, tempore hic. Ipsa quaerat doloremque architecto iusto itaque.
            Exercitationem itaque ipsa numquam ex doloremque possimus quasi sunt laudantium voluptatem sed rem tempora veniam corporis quaerat animi odit repellat vel eaque, delectus similique tenetur nesciunt velit! Illo, voluptatem animi?
            </p>
        </div>
    </div>
  )
}

export default About