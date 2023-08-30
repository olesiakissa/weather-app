import Degree from './forecast/Degree'
import Home from '../assets/house.png'

type Props = {
    name: string
    desc: string
    temp: number
    max: number
    min: number
}

const Hero = ({ name, desc, temp, max, min} : Props) => {
  return (
    <section id='hero' className='flex col'>
        <h1 id='hero-heading'>{name}</h1>
        <Degree temp={temp} spanId='degree'/>
        <div className='flex col'>
            <p id='description'>{desc}</p>
            <p>H:<Degree temp={max}/> L:<Degree temp={min}/></p>
        </div>
        <img src={Home} alt='house logo' />
    </section>
  )
}

export default Hero