import React from 'react'
import Head from 'next/head'
import styles from './styles.module.css'

export const metadata = {
    title: 'Nuance..',
    description: 'impressum'
  }

const Imprint = () => {

    
  return (
    <>
    <Head>
    
    <meta
          name="description" content={metadata.description}
        />
        <meta name="robots" content="noindex, nofollow" />
    </Head>
    
    <main className={styles.container}>
      <div className={styles.innerContainer}>
        
        <div className={styles.impressumContainer}>
          <h1 className={styles.h1}>IMPRESSUM</h1>
          <div className={styles.texts}>
            <div>
            <h3>Angaben gemäß § 5 TMG:</h3>
            <p>Nuance Studio</p>
            <p>Christian Bohdan</p>
            <p> Schnieglinger Str. 264</p>
            <p>  90427 Nürnberg</p>
            </div>

            <div>
            <h3>Vertreten durch:</h3>
            <p>Christian Bohdan</p>
            <h3>Kontakt:</h3>
            <p>E-Mail: c.bohdan@nuancestudio.de</p>
            </div>
            
          </div>

          <div className={styles.block}>
            <h2 className={styles.h2}>Umsatzsteuer:</h2>
            <p>9240/206/32018</p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.h2}>Hinweis auf EU-Streitschlichtung</h2>
            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr</p>

            <p>Unsere E-Mail-Adresse finden sie oben im Impressum.</p>
          </div>

          <div className={styles.block}>
            <h3>HAFTUNGSAUSSCHLUSS (DISCLAIMER)</h3>
            <h2 className={styles.h2}>Haftung für Inhalte</h2>
            <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>


          </div>

          <div className={styles.block}>
           
            <h2>Urheberrecht</h2>
            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>

            <p>Qulle:</p>
            <a href='https://www.e-recht24.de'>https://www.e-recht24.de</a>


          </div>
        </div>

       
      </div>
    </main>
    </>
  )
}

export default Imprint