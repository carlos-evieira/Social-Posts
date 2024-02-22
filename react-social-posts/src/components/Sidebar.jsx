import { PencilLine } from "phosphor-react"
import styles from "./Sidebar.module.css"
import { Avatar } from "./Avatar"

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?q=50&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <div  className={styles.profile}>
        <Avatar src="https://github.com/carlos-evieira.png"/>
        <strong>Kadu Vieira</strong>
        <span>Web Developer</span>

        <footer>
          <a href="#">
            <PencilLine size={20}/>
            Editar seu perfil
          </a>
        </footer>
      </div>
    </aside>
  )
}
