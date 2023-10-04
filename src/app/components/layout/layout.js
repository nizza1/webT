import Navbar from '../headerBar/headerBar'
import Footer from '../footer/footer'
import styles from '../../page.module.css'
 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}