import React from 'react'
import {Text, Button} from 'react-native'
import {BotaoIncrementador} from '../estilos/EstiloDoBotaoInc'

function Incrementar (props){

    function Incrementador(){
        inc = props.valor
        return(
            function(){
                inc = inc+1
                props.funcao(inc)
            }
        )
    }

    return(
        <Button
            title="+"
            onPress={Incrementador()}
            color='red'
        />
    )


}

export {Incrementar}