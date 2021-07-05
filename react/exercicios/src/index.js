import React from 'react'
import ReactDOM from 'react-dom'

//import BomDia from './components/BomDia'
//import { BoaTarde, BoaNoite } from './components/Multiplos'
//import Saudacoes from './components/Saudacoes'
import Pai from './components/Pai'
import Filho from './components/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            {/* Como passo os componentes Filhos aqui? */}
            <Filho nome="Pedro" sobrenome="Silva"/>
            <Filho nome="Paulo" sobrenome="Silva"/>
            <Filho nome="Carla" sobrenome="Silva"/>
            </Pai>
    </div> , document.getElementById('root'))