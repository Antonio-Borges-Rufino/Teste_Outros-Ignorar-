import React, {useState} from 'react'
import {View,Text, StyleSheet, Button, Alert  } from 'react-native'
import {Decrementar} from './filhoBotaoDecrementar'


function Decrementador(props){
    numero = props.numero
    

    function DecrementarMenos(numero){
                props.funcao(numero)
    }

    return(
        <React.Fragment>
            <Decrementar 
                valor={numero}
                funcao={DecrementarMenos} 
            />
        </React.Fragment>
    )

}

export {Decrementador}