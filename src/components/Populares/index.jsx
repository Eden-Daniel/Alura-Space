import Botao from "components/Botao"
import fotos from "./fotos-populares.json"
import style from "./Populares.module.scss"

export default function Populares() {
    return (
        <aside className={style.populares}>
            <h2>Populares</h2>
            <ul className={style.populares__imagens}>
                {fotos.map((foto) => {
                    return(
                        <li key={foto.id}> 
                            <img src={foto.path} alt={foto.alt} /> 
                        </li>
                    )
                })}
            </ul>
            <Botao valor="Ver mais fotos" />
        </aside>
    )
}