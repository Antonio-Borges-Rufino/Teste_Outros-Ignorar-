import React, {Component, useState} from 'react'
import {View, Text, TextInput ,StyleSheet,TouchableOpacity, TouchableWithoutFeedback, Modal} from 'react-native'
import Estilos from '../estilosComuns'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import 'moment/locale/pt-br'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Button } from 'react-native-elements/dist/buttons/Button'

export default props =>{
    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false)
    const [Desc, setDesc] = useState('')
   
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date
        //setShow(Platform.OS === 'android')
        setShow(false)
        setDate(currentDate)
      }

    const reset = ()=>{
        setDate(new Date())
        setMode('date')
        setShow(false)
        setDesc('')  
    }

      const showMode = () => {
        setShow(true);
        setMode('date');
      };

     const save = () =>{
         const newTask = {
             desc: Desc,
             date: date
         }
         if(props.onSave){props.onSave(newTask)}
         reset()
     }

     const Mostrar = () =>{   
        if (show==true){
            return(
                <DateTimePicker
                       testID="dateTimePicker"
                       value={date}
                       mode={mode}
                       is24Hour={true}
                       display="default"
                       onChange={onChange}
                       />    
                )
        }
     }   
      

    return(
        <Modal transparent={true} visible={props.visivel} onRequestClose={props.onCancel}
        animationType='slide'>
            <TouchableWithoutFeedback onPress={props.onCancel}>
                <View style={styles.backgroud}>

                </View>
            </TouchableWithoutFeedback>
            <View style={styles.container}> 
                <Text style={styles.header}>Nova Tarefa</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder='Descrição' 
                    value={Desc}
                    onChangeText={descricao=>setDesc(descricao)}
                />
                <View>
                <TouchableOpacity onPress={showMode}>
                        <Text style={styles.date}>
                            {moment(date).format('ddd, D [de] MMMM [de] YYYY')}
                        </Text>
                    </TouchableOpacity>
                </View>
                {Mostrar()}
                <View style={styles.botoes}>
                    <TouchableOpacity onPress={props.onCancel}>
                        <Text style={styles.bot}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={save}>
                        <Text style={styles.bot}>Salvar</Text>
                    </TouchableOpacity>
                </View>                    
            </View>
            <TouchableWithoutFeedback onPress={props.onCancel}>
                <View style={styles.backgroud}>

                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}


const styles = StyleSheet.create({
    backgroud:{
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    container:{
        //flex:1,
        backgroundColor:'#FFF'
    },
    header:{
        backgroundColor:'#b13b44',
        color:'#FFF',
        textAlign:'center',
        padding:15,
        fontSize:18
    },
    input:{
        //width:'90%',
        height:40,
        margin:15,
        //marginTop:10,
        //marginLeft:10,
        backgroundColor:'#FFF',
        borderWidth:3,
        borderColor: '#E3E3E3',
        borderRadius:6
    },
    botoes:{
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    bot:{
        margin:20,
        marginRight:30,
        color:'#b13b44'
    },
    date:{
        fontSize:20,
        marginLeft:20
    }
})
