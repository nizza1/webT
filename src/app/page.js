
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

//providers 

//Modal


  
export default function Home() {
  return (

      <main className={classNames(styles.main, '')}>
           <Hero />
           <Futures />
           <Phases />
           {/* <Resposnsive /> */}
           <Advantages />
           <About />
          {/*  <Tech /> */}
           <Contact />
           <Questions/>
     
      </main>
  
    
  )
}
