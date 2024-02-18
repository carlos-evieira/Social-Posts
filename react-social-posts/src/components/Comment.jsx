import styles from './Comment.module.css';
import { ThumbsUp, Trash } from "phosphor-react"

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/carlos-evieira.png"/>
      <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Isabella Vieira</strong>
                <time title="18 de Fevereiro às 10:03h" dateTime="2024-02-18">Cerca de 1h atrás</time>
              </div>
              <button title='Deletar comentário'>
                <Trash size={22} />
              </button>
            </header>
            <p>Muito bom Kadu, parabéns!! 👏👏</p>
          </div>

          <footer>
            <button>
              <ThumbsUp />
              Aplaudir 
              <span>20</span>
            </button>
          </footer>

      </div>
    </div>
  )
}
