import styles from './Header.module.css'
import ignitelogo from "../assets/Ignite-logol.svg"

export const Header = () => {
  return (
    <header className={styles.header}>
      
    
      <img className={styles.logo} src={ignitelogo} alt="logotipo do ignite" />
      <strong className={styles.strong}>Ignite Feed</strong>
    </header>
    
  )
}
