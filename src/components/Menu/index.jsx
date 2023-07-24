import Icone from "./Icones"
import icones from "./icons.json"
import style from './Menu.module.scss'

export default function Menu() {
    return(
        <nav className={style.menu}>
            <ul className={style.menu__lista}>  
                {icones.map(icone => (<Icone key={icone.id} icone={icone} style={style}/>))}                            
            </ul>
        </nav>
    )
}