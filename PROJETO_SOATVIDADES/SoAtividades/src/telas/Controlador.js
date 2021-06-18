import React, {useState} from 'react'
import {View,Text,TouchableOpacity,Button, SafeAreaView} from 'react-native'
import {TelaLogin} from '../componentes/TelaLogin'
import {TelaAtividades} from '../componentes/TelaAtividades'



function  Controlador (props){
    const dados = props.dados
    let tamanho = 0
    

    function setTam(){
        if(dados!=null){
            dados2 = JSON.stringify(dados)
            dados2 = JSON.parse(dados2)
            dados3 = 1
            while(dados3!=0){
                if(dados2[dados3]==null){
                    tamanho=dados3-2
                    break
                }else{
                    dados3 = dados3+1
                }
            }
        }     
    }

    function startTela(email,senha){  
        props.mudarTela(email,senha,0)
    }

    if(props.controle==0){
        return(
            <View style={{flex:1}}>
                <TelaLogin 
                    startTela={startTela}
                    error={props.error}
                />
            </View>
        )
    }

    if(props.controle==1){
        setTam()
        
        return(
            <View style={{flex:1}}>
                <TelaAtividades 
                    matricula={props.matricula} 
                    senha={props.senha} 
                    dados={props.dados}
                    tamanho={tamanho}
                />
            </View>
        )
    }



}


export {Controlador}