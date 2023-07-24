import { useState } from "react"
import Card from "./Card"


export default function Cards( {itens, style} ) {
    

    return (
        <ul className={style.galeria__cards}>
            {itens.map((foto) => {
                return (
                    <Card foto={foto} style={style} />
                )
            })}
        </ul>
    )
}