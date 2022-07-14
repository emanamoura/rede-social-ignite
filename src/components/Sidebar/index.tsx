import styles from './style.module.css';
import { Pencil, PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1518713661966-8ce9a2e78bbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
                alt="Capa do perfil"
            />
                
            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/94456436?v=4" hasBorder={false}/>
                <strong>Emanuel Moura</strong>
                <span>Web and Mobile developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}