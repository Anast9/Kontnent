import React from "react"

export default props => (
    <div>
        <h3>Дорамы Имя :{props.name}</h3>
       <p> Дата выхода: <strong>{props.year}</strong></p> 
       {props.children}
    </div>
)