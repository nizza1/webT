import Image from 'next/image'
import Link from 'next/link'
//styles
import styles from './page.module.css'

//to access multi classes for tags
import classNames from 'classnames';

//chakra ui
/* import { ChakraProvider } from '@chakra-ui/react' */


//components 
import Hero from '@app/components/heroSection/heroSection'
import Resposnsive from './components/responsive/resposnsive';
import Questions from './components/questions/questions';
import Futures from './components/Futures/Futures';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Tech from './components/techstack/tech';
import Phases from './components/Dev-phases/phases';
import Advantages from './components/advantages/advantages';

//providers 

//Modal
import Offer from './components/offerModal/offer';

  
export default function Home() {
  return (

      <main className={classNames(styles.main, '')}>

          {/*  <Offer /> */}
           <Hero />
           <Futures />
           <Phases />
           <Resposnsive />
           <Advantages />
           <About />
           <Tech />
           <Contact />
           <Questions/>
     
      </main>
  
    
  )
}
