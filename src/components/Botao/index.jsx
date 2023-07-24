import style from "./Botao.module.scss"

export default function Botao( {valor} ) {
    return (
        <button className={style.botao}>{valor}</button>
    )
}