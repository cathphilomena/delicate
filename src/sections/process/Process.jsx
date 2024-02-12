import './process.css'
import process1 from '../../assets/image5.jpg'
import process2 from '../../assets/image3.jpg'
import process3 from '../../assets/image4.jpg'

const Portfolio = () => {
  return (
    <section id='process'>
        <h2>Process</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit aliquam suscipit sed maxime. Placeat molestiae, quaerat cum expedita repellendus sit illum dolorem, reprehenderit quae totam iure saepe repudiandae delectus.</p>
        <div className="container info__container">
            <article className="info">
                <div className="info__image">
                    <img src={process1}/>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, adipisci facere voluptatem est qui voluptates!</p>
                <div className="info__cta">
                    <a href="#contact" className="btn">Discover More</a>
                </div>

            </article>
            <article className="info">
                <div className="info__image">
                    <img src={process2}/>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, adipisci facere voluptatem est qui voluptates!</p>
                <div class="info__cta">
                    <a href="#contact" className="btn">Discover More</a>
                </div>

            </article>
            <article className="info">
                <div className="info__image">
                    <img src={process3}/>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, adipisci facere voluptatem est qui voluptates!</p>
                <div className="info__cta">
                    <a href="#contact" className="btn">Discover More</a>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Portfolio