
//styles
import styles from './page.module.css'

//to access multi classes for tags
import classNames from 'classnames';


//components 
import Hero from '@app/components/heroSection/heroSection'
import Questions from './components/questions/questions';
import Futures from './components/Futures/Futures';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Phases from './components/Dev-phases/phases';
import Advantages from './components/advantages/advantages';
/* import Sliderr from './components/newSlider/sliderr'; */
import Slider from './components/slider/slider';
import Cards from '@app/components/cardsS/cards'
//providers 

//GTMConversion
/* import GTMConversion from './gtmEvent/gtmConv'; */


  
export default function Home() {
  return (

      <main className={classNames(styles.main, '')}>

           <Hero />
           <Advantages />
           <Cards />
           <Futures />
           <Slider  />
           <Phases />
           <About />
           <Contact />
           <Questions/>
           
           {/* <GTMConversion /> */}
     
      </main>
  
    
  )
}
