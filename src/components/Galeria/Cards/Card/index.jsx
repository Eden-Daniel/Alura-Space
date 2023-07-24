import open from "./open.png"
import favorito from "./favorito.png"

export default function Card({ foto, style }) {
    return (
        <li key={foto.id} className={style.galeria__card}>
            <img className={style.galeria__imagem} src={foto.imagem} alt={foto.titulo} />
            <p className={style.galeria__descricao}>{foto.titulo}</p>
            <div>
                <p>{foto.creditos}</p>
                <spam>
                    <img src={favorito} alt="Ícone coração de curtida" />
                    <img src={open} alt="Ícone de abrir modal" />
                </spam>
            </div>
        </li>
    )
}