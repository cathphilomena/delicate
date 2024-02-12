import faqs from './data'
import './faqs.css'
import FAQ from './FAQ'

const FAQs = () => {
  return (
    <section id="faqs">
        <div className="container">
          <h2>FAQs</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptates et tempore sequi ea, totam maxime iure cum repellendus laborum temporibus consectetur quae, incidunt dignissimos laboriosam, pariatur delectus neque inventore!</p>
          <div className='faqs__container'>
            {
              faqs.map(faq => (
                <FAQ key={faq.id} faq={faq}/>
              ))
            }
          </div>
        </div>
    </section>
  )
}

export default FAQs