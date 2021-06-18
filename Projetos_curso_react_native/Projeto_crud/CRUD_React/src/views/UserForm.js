import React, { useContext, useState } from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import Usercontext from '../context/UsersContext';



function Formulario (props){
    const[use,setUse] = useState(props.route.params ? props.route.params : {})

    const {dispatch} = useContext(Usercontext)

    return(
        <View style={style.form}>
            <Text>Nome</Text>
            <TextInput 
                style={style.input}
                onChangeText={nome=> setUse({...use,nome})}
                placeholder="Informe Seu Nome"
                value={use.nome}
            />
            <Text>Email</Text>
            <TextInput 
                style={style.input}
                onChangeText={email=> setUse({...use,email})}
                placeholder="Informe Seu Email"
                value={use.email}
            />    
            <Text>Avatar</Text>
            <TextInput 
                style={style.input}
                onChangeText={avatarUrl=> setUse({...use,avatarUrl})}
                placeholder="Informe Seu Nome"
                value={use.avatarUrl}
            />  
            <Button 
                title="Salvar" 
                onPress={()=>{dispatch({ 
                    type: use.id? 'updateUser': 'creatUser',
                    payload: use
                }); navigation.goBack()}}
            />                  
        </View>
    )
}

const style = StyleSheet.create({
    input:{
        height:40,
        borderColor:'grey',
        borderWidth:1,
        marginBottom:10
    },
    form:{
        padding:12
    }
})


export{Formulario}