import React, {useState} from 'react'
import {View,Text,TouchableOpacity,StyleSheet, ImageBackground, TextInput, Button} from 'react-native'
import imgHj from '../../source/LOGO.jpg'

function  TelaLogin (props){
    const [email, setEmail]=useState('')
    const [senha, setSenha]=useState('')

    function Start(){
        props.startTela(email,senha)
    }

    return(
        
        <View style={{flex:1}}>
            <View style={{flex:1, backgroundColor:'rgb(18,144,203)',alignItems:'center',
        justifyContent:'center'}}>
                <ImageBackground source={imgHj} style={style.ImagemBack}/>
            </View>
            <View style={style.login}>
                <TextInput 
                    style={props.error==0?style.textInputMatricula:style.textInputMatriculaError}
                    placeholder={props.error==0?'       Matricula':'     Erro'} 
                    value={email} 
                    onChangeText={value=>setEmail(value)}
                />
                <TextInput 
                    style={props.error===0?style.textInputSenha:style.textInputSenhaError}
                    placeholder={props.error==0?'       Senha':'     Erro'} 
                    value={senha} 
                    onChangeText={senha=>setSenha(senha)}
                />
            </View>  
            <View style={style.botomArea}>
                <TouchableOpacity activeOpacity={0.8} onPress={()=>{Start()}} style={{height:37}}>
                    <View style={style.botaoEntrar}>
                        <Text style={{color:'white',fontSize:20}}>Entrar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={()=>{Start()}}  style={{height:37}}>
                    <View style={style.Cadastar}>
                        <Text style={{color:'white',fontSize:20}}>Cadastrar</Text>
                    </View>
                </TouchableOpacity>
            </View>          
        </View>
    )
}


const style = StyleSheet.create({
    login:{
        flex:1,
        backgroundColor:'rgb(18,144,203)', 
        alignItems:'center',
        justifyContent:'flex-end'
    },
    ImagemBack:{
        flex:1,
        width:'80%',
        backgroundColor:'rgb(18,144,203)',marginLeft:50
    },
    botomArea:{
        flex:1,
        backgroundColor:'rgb(18,144,203)',
        flexDirection:'row'
    },
    botaoEntrar:{
        backgroundColor:'rgb(0,255,64)',
        height:37,
        width:136,
        alignItems:'center', 
        justifyContent:'center',
        borderRadius: 50,
        marginTop:20,
        marginLeft:35
    },
    Cadastar:{
        backgroundColor:'rgb(14,105,150)',
        height:37,
        width:136,
        alignItems:'center', 
        justifyContent:'center',
        borderRadius: 50,
        marginTop:20,
        marginLeft: 15   
    },
    textInputMatricula:{
        backgroundColor:'white',
        width:290,
        borderRadius:145
    },
    textInputSenha:{
        backgroundColor:'white',
        width:290,
        borderRadius:145,
        marginTop:15
    },    
    textInputMatriculaError:{
        backgroundColor:'white',
        borderWidth:5,
        borderColor:'red',
        width:290,
        borderRadius:145
    },
    textInputSenhaError:{
        backgroundColor:'white',
        width:290,
        borderWidth:5,
        borderColor:'red',
        borderRadius:145,
        marginTop:15
    }
})


export {TelaLogin}






