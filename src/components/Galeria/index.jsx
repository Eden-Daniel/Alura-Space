import Tags from "../Tags";
import style from "./Galeria.module.scss"
import fotos from "./fotos.json"
import Cards from "./Cards";
import { useState } from "react";

export default function Galeria(){
    const [itens, setItens] = useState(fotos)
    /* percorre todas as fotos e extrai só o valor de teg, para não repetir/duplicado usa a função new Set e depois espelha dentro do array, é cada posição desse array vai ser preenchida pela teg unica */
    const tags = [...new Set(fotos.map((foto) => foto.tag))]

    const filtrarFotos = (tag) => {
        const novasFotos = fotos.filter((foto) => {
            return foto.tag === tag
        })

        setItens(novasFotos)
    } 

    return (
        <section className={style.galeria}>
            <h2>Navegue pela galeria</h2>
            <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens}/>
            <Cards itens={itens} style={style} />
        </section>
    )
}