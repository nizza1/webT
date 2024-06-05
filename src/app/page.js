
//styles
import styles from './page.module.css'

//to access multi classes for tags
import classNames from 'classnames';


//components 
import Hero from '@app/components/heroSection/heroSection'
import Questions from './components/questions/questions';
import Futures from './components/Futures/Futures';
import About from './components/about/about';
import Phases from './components/Dev-phases/phases';
import Advantages from './components/advantages/advantages';
import Slider from './components/slider/slider';
import Cards from '@app/components/cardsS/cards'
import Usp from './components/usp/usp';

//test 
import Contactsec from '@app/components/testContact/cont';
//providers 

//GTMConversion
/* import GTMConversion from './gtmEvent/gtmConv'; */



export default function Home() {
     return (

          <main className={classNames(styles.main, '')}>

               <Hero />
               {/* <Usp/> */}
               {/*      <Advantages /> */}
               <Cards />
               <Futures />
               <Slider />
               <Phases />
               <About />
               <Contactsec />
               {/*  <Contact /> */}
               <Questions />

               {/* <GTMConversion /> */}

          </main>


     )
}
