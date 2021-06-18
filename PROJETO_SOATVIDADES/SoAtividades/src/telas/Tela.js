import React, {useState} from 'react'
import {View,Text,TouchableOpacity,Button, SafeAreaView} from 'react-native'
import {Controlador} from './Controlador'



function  Tela (props){
  const[tela1,setTela] = useState(0)
  const[matricula,setMatricula]=useState('')
  const[senha,setSenha]=useState('')
  const[erroLogin,seterroLogin]=useState(0)
  const[dados,setDados]=useState(null)
  const[result,setRes]=useState(0)
  

  const getMoviesFromApiAsync = async () => { 
    try {
        let response = await fetch('http://192.168.100.19/SoAtividade/Verificacao-Login.php',{
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({'matricula':matricula,'senha':senha})
        })
        let json = await response.json();
        //setText(json)
        //console.warn(json)
        if(json.erro==1){
            seterroLogin(1)
        }else{
          seterroLogin(0)
          setTela(1)
          setDados(json)
        }

      } catch (error) {
        console.error(error);
      }
    };


  function mudarTela (email,senha2){
    setSenha(senha2)
    setMatricula(email)
    setRes(1)
  }

  if(result==0){
    return(
      <SafeAreaView style={{flex:1}}>
        <Controlador 
          controle={tela1} 
          mudarTela={mudarTela} 
          matricula={matricula} 
          senha={senha} 
          dados={dados}
          error={erroLogin}
        />
      </SafeAreaView>
    )
  }
if(result==1){
  getMoviesFromApiAsync()
  setRes(0)
  return(
    <Controlador 
    controle={tela1} 
    mudarTela={mudarTela} 
    matricula={matricula} 
    senha={senha} 
    dados={dados}
    error={erroLogin}
  />
  )
}






 

}


export {Tela}






