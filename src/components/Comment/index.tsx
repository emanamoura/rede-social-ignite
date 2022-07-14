import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';
import styles from './style.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
             <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/94456436?v=4"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Emanuel Moura</strong>
                            <time title="11 de Maio às 08:13h" dateTime="2022-06-22 08:13:30">Cerca de 1 hora atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito massa Nunu, parabéns !</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}