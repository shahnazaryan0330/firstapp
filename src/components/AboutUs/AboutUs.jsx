import './AboutUs.css'

const AboutUs = (props) => {
   const { name, txt } = props.txt
   return (
      <section className='aboutUs'>
         <h1>{name}</h1>
         <p>{txt}</p>
      </section>
   )
}

export default AboutUs