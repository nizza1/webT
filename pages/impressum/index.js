import React from 'react'
import styles from './styles.module.css'
import Head from 'next/head'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Nuance',
  description: 'impressum'
}

const Impressum = () => {
  return (
    <>
    <Head>
    
    <meta
          name="description" content={metadata.description}
        />
        <meta name="robots" content="noindex, nofollow" />
    </Head>
    
    <main className={`${styles.container} ${inter.className}`}>
      <div className={styles.innerContainer}>
        
        <div className={styles.impressumContainer}>
          <h1 className={styles.h1}>1.IMPRESSUM</h1>
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

        <div className={styles.datenConteiner}>
        <h1 className={styles.h1}>2.DATENSCHUTZ</h1>
        <div className={styles.block}>
          <h2 className={styles.h2}>1. Datenschutz auf einen Blick</h2>
          <p>a. Allgemeine Hinweise</p>
          <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
          <p>b. Datenerfassung auf dieser Website</p>

          <p>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>

          <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>

          <p>Wie erfassen wir Ihre Daten?</p>
          <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>

          <p>Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>

          <p>Wofür nutzen wir Ihre Daten?</p>

          <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>

          <p>Welche Rechte haben Sie bezüglich Ihrer Daten?</p>

          <p>Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung unter „Recht auf Einschränkung der Verarbeitung“.</p>

        </div>

        <div>
          <h2 className={styles.h2}>2. Allgemeine Hinweise und Pflichtinformationen</h2>

          <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
          
          <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p>

          <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>

          <p>Hinweis zur verantwortlichen Stelle</p>

          <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>

          <p>Christian Bohdan</p>
          <p>Schnieglinger Str. 264 , 90427 Nürnberg</p>

          <p>Telefon: 0157/70390746</p>
          <p>E-Mail: c.bohdan@nuancestudio.de</p>



          <p>Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
          <p>Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.</p>

          <p>Kontaktformular</p>
          <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>

          <p>ie Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde. Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.</p>

          <p>Anfrage per E-Mail, Telefon</p>

          <p>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>

          <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und/oder auf unseren berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein berechtigtes Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen haben.</p>

          <p>Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.</p>





        </div>

        <div className={styles.block}>
          <h2 className={styles.h2}>3. Inhalte Dritter auf der Webseite
           </h2>
           <p>Unser Internetauftritt integriert Inhalte anderer Anbieter. Dies können reine Content-Elemente (z.B. Nachrichten, Neuigkeiten), aber auch Widgets (Funktionen, wie z.B. Buchungssysteme) oder z.B. Schriften und technische Bibliotheken sein. Dazu gehören auch Google Fonts. Aus technischen Gründen erfolgt dies, indem diese Inhalte vom Browser von anderen Servern geladen werden. In diesem Zusammenhang werden die aktuell von Ihrem Browser verwendete IP und der verwendete Browser des anfragenden Systems übermittelt. Bitte beachten Sie diesbezüglich die jeweiligen Datenschutzerklärungen der Drittanbieter.</p>
           
           <p>Google Webfonts</p>
           <p>Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen. Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Google Web Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt. Weitere Informationen zu Google Web Fonts finden Sie unter https://developers.google.com/fonts/faq und in der Datenschutzerklärung von Google: </p>
           <a href='https://policies.google.com/privacy?hl=de'>https://policies.google.com/privacy?hl=de</a>



        </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default Impressum