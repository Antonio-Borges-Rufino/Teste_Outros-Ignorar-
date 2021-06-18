import React, {useState} from 'react'
import {View,Text, StyleSheet, Button, Alert  } from 'react-native'
import {Incrementar} from './filhoBotaoIncrementador'


function Incrementador(props){
        numero = props.numero

    function IncrementarMais(numero){
        props.funcao(numero)
    }


    return(
        <View>
            <Incrementar
                numero={numero}
                funcao={IncrementarMais}
            />
        </View>
  
        
    )

}

export {Incrementador}