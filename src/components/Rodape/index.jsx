import facebook from "./facebook.svg"
import instagram from "./instagram.svg"
import twitter from "./twitter.svg"
import style from "./Rodape.module.scss"

export default function Rodape(){
    return (
        <footer className={style.rodape}>
            <div className={style.rodape__icones}>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                    <img src={facebook} alt="Ícone do facebook"/>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <img src={instagram} alt="Ícone do instagrem"/>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <img src={twitter} alt="Ícone do twitter"/>
                </a>
            </div>
            <p>Desenvolvido por Éden Silva</p>
        </footer>
    )
}