import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

function Botoes(props){

    function Calcular() {
        if(props.cod == 1){
            return(
                function(){
                  valor = props.num 
                  props.disparar(valor)
                }
            )
        }
        if(props.cod == 2){
            return(
                function(){
                  valor = props.cod 
                  props.disparar(valor)
                }
            )
        }  
        if(props.cod == 3){
            return(
                function(){
                  props.disparar()
                }
            )
        } 
        if(props.cod == 4){
            return(
                function(){
                  props.disparar()
                }
            )
        } 
        if(props.cod == 5){
            return(
                function(){
                  valor= props.cod
                  props.disparar(valor)
                }
            )
        }                         
        if(props.cod == 6){
            return(
                function(){
                  valor= props.cod
                  props.disparar(valor)
                }
            )
        } 
        if(props.cod == 7){
            return(
                function(){
                  valor= props.cod
                  props.disparar(valor)
                }
            )
        }                 
    }


    const EstiloBotao = StyleSheet.create({
        TelBot:{
            backgroundColor:'black',
            alignItems:'center', 
            justifyContent:'center',   
            width:85,
            height:82,
            borderWidth:10,
            borderRadius: 200,
            borderColor:'red'
        }
    })
    
return(
    <View style={EstiloBotao.TelBot}>
        <Button
            title={props.nome}
            color='#FF8C00'
            onPress={Calcular()}
        />
    </View>
)
}



export{Botoes}