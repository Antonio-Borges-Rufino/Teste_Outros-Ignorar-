import React, { useState } from 'react';
import {Button, Text, View} from 'react-native';
import {EstiloTelaCalcula} from './layouts/LayoutTelaCalc'
import {EstiloTelaMostrar} from './layouts/LayoutTelaMostrar'
import {EstiloTelaBotao} from './layouts/LaoutTelaBots'
import {Botoes} from './layouts/LayoutBotoes'

function Tela(){
    const [numero, setNumero] = useState(0)
    const [codigo, setCod] = useState(0)
    const [val, setVal] = useState(0)
    const [numer, setNumer] = useState(0)
    const [painel, setPainel] = useState(0) 
    const [controle, setControle] = useState(0) 
    result = 0

     function Guardar (props){
        if(codigo == 0){
             result = painel+""+props
             result = +result
             setControle(1)
             setVal(result)
             Setar(props)
        }else{
            result = painel+""+props
            result = +result
            setNumer(result) 
            Setar(props)         
        }
     }

     function Setar(props){
         result = painel+""+props
         result = +result
         setPainel(result)
         setNumero(result)
     }

     function Operacao(params) {
            setCod(params)
            setPainel(0)
     }

     function Limpar() {
        setNumer(0) 
        setNumero(0)  
        setVal(0)
        setCod(0)
        setPainel(0)
        setControle(0)
     }

     function Calcular() {
    
    if(controle==1){
        if(codigo == 0){
            result = val+""+val
            setNumero(result)
        }
        if(codigo == 2){
            result = val+numer
            setNumero(result)
            setVal(result)
        }
        if(codigo == 5){
            result = val*numer
            setNumero(result)
            setVal(result)
        } 
        if(codigo == 6){
            result = val-numer
            setNumero(result)
            setVal(result)
        }     
        if(codigo == 7){
            result = val/numer
            setNumero(result)
            setVal(result)
        }                            
     }else{
        if(codigo == 2){
            result = numer+numer
            setNumero(result)
            setVal(result)
        }
        if(codigo == 5){
            result = numer*numer
            setNumero(result)
            setVal(result)
        } 
        if(codigo == 6){
            result = numer-numer
            setNumero(result)
            setVal(result)
        }     
        if(codigo == 7){
            result = Math.sqrt(numer)
            setNumero(result)
            setVal(result)
        }          
     }
    }

    return(
        
        <View style={EstiloTelaCalcula.TelaPrincipalCalc}> 
            <View style={EstiloTelaMostrar.TelaMostrarNum}>
                <Text style={{fontSize:30}}>{numero}</Text>
            </View>
            <View style={EstiloTelaBotao.TelaBotao}>
                <Botoes cod={1} nome="1" num={1} disparar={Guardar}/>
                <Botoes cod={1} nome="2" num={2} disparar={Guardar}/>
                <Botoes cod={1} nome="3" num={3} disparar={Guardar}/>
                <Botoes cod={1} nome="4" num={4} disparar={Guardar}/>
                <Botoes cod={1} nome="5" num={5} disparar={Guardar}/>
                <Botoes cod={1} nome="6" num={6} disparar={Guardar}/>
                <Botoes cod={1} nome="7" num={7} disparar={Guardar}/>
                <Botoes cod={1} nome="8" num={8} disparar={Guardar}/>
                <Botoes cod={1} nome="9" num={9} disparar={Guardar}/>
                <Botoes cod={1} nome="0" num={0} disparar={Guardar}/>                
                <Botoes cod={2} nome="+" num={0} disparar={Operacao}/>
                <Botoes cod={6} nome="-" num={0} disparar={Operacao}/>                
                <Botoes cod={5} nome="X" num={0} disparar={Operacao}/>
                <Botoes cod={7} nome="/" num={0} disparar={Operacao}/>
                <Botoes cod={3} nome="=" num={0} disparar={Calcular}/>
                <Botoes cod={4} nome="CE" num={0} disparar={Limpar}/>
            </View>
        </View>
    )
}



export{Tela}
