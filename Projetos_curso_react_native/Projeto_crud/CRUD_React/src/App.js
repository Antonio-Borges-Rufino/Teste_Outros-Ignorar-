import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {ListarUsuario} from './views/UserList'
import {Formulario} from './views/UserForm'
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import {UserProvider} from './context/UsersContext'

function Navegador (){
  return createStackNavigator()
}

export default props =>{
    const Stack = Navegador()
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRoutName='ListaDeUsuarios' screenOptions={screenOptions}>
          <Stack.Screen name='ListaDeUsuarios' component ={ListarUsuario}
          options={({navigation})=>{ return{title: "Lista de Usuarios",
              headerRight: ()=>(
                <Button 
                  onPress={()=> navigation.navigate("FormularioDeUsuario")}
                  type='clear' 
                  icon={<Icon name='add' size={25} color='white'/>}
                  />
                )
              }
            }
          }/>
          <Stack.Screen name='FormularioDeUsuario' component ={Formulario} options={{title:"Formulário de Usuarios"}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>

  )
  
}

const screenOptions ={
  headerStyle: {
    backgroundColor: '#f4511e'
  },
  headerTintColor: '#fff',
}
 