import React, { useContext } from 'react';
import {Text, StyleSheet, View, FlatList, Alert} from 'react-native';
import { ListItem, Button,Icon } from 'react-native-elements';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import UserContext from '../context/UsersContext'


function ListarUsuario (props){

    const { state, dispatch } = useContext(UserContext)

    function confirmarUsuarioDelet(user){
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário', [
            {
                text:'Sim', 
                onPress(){
                    dispatch({
                        type: 'deleteUser',
                        payload: user
                    })
                }
            },
            {
                text:'Não'
            }
        ])
    }

    function getActions(user){
        return(
            <View style={{flexDirection:'row'}}>
                <Button 
                onPress={()=>props.navigation.navigate('FormularioDeUsuario', user)}
                type='clear'
                icon={<Icon name="edit" size={25} color="orange"/>}
                />
                
                <Button 
                onPress={()=>confirmarUsuarioDelet(user)}
                type='clear'
                icon={<Icon name="delete" size={25} color="red"/>}
                />                
            </View>
        )
    }

    function getUserItem({ item:user }){
        //console.warn(user.avatarUrl)
        return(
            <ListItem 
            bottomDivider 
            onPress={()=> props.navigation.navigate('FormularioDeUsuario', user)} 
            key={user.id}  
            >
                <Avatar source={{uri: user.avatarUrl}}/>
                <ListItem.Content >
                    <ListItem.Title>{user.nome}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content> 
                <ListItem.Content right>
                    {getActions(user)}
                </ListItem.Content>              
            </ListItem>
        )
    }
    
    //console.warn(Object.keys(props))

    return(
        <View>
            <FlatList 
            data={state.users} 
            keyExtractor={user => user.id.toString()} 
            renderItem={getUserItem}/>
        </View>
    )
 
}
export{ListarUsuario}


