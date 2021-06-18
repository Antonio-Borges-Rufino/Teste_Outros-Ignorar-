import React, {useState} from 'react'
import {View,Text, StyleSheet, Button, Alert  } from 'react-native'
import {Incrementador} from '../botaoIncrementador/botaoIncrementador'
import {Decrementador} from '../botaoDecrementador/botaoDecrementar'
import{EstiloTexto} from '../estilos/EstiloDoTexto'


function TelaContador(){
    const [numero, setNumero] = useState(0)

    function Mudar(numero){
        setNumero(numero)          
    }

    return(
        <React.Fragment>
            <View>
                <Text style={EstiloTexto.EstiloTextoContador}>{numero}</Text>
            </View> 
            <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
            <Incrementador
                numero = {numero}
                funcao = {Mudar}
            />
            <Decrementador
                numero = {numero}
                funcao = {Mudar}            
            />
        </View>
        </React.Fragment>



    )

}


export {TelaContador}
