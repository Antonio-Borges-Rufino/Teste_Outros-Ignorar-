import React from 'react'
import {Text, Button} from 'react-native'
import {BotaoDecrementador} from '../estilos/EstiloDoBotaoDec'

function Decrementar (props){

    function Decrementador(){
        inc = props.valor
        
        return(
            function(){
                inc = inc-1
                props.funcao(inc)
            }
        )
    }

    return(

            <Button
            title="-"
            onPress={Decrementador()}
            style={BotaoDecrementador.corBotao}
        />            
 

    )


}



export {Decrementar}