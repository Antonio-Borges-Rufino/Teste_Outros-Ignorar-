import React, {Component} from 'react'
import {View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity,Platform, Modal, Button} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Ico from 'react-native-vector-icons/Feather'

import imgHj from '../../assets/imgs/today.jpg'
import moment from 'moment'
import 'moment/locale/pt-br'
import estilos from '../estilosComuns'
import Task from '../componentes/Task'
import Test from './AddTela'
import AsyncStorage from'@react-native-async-storage/async-storage'
//import AddTask from './AddTela'
//import {AddTask} from './addTask'

const initialState = {       
    ShowDonTask:true,
    showAddTask:false,
    tasks:[]
}

export default class TaskList extends Component{
    
    state={
        ...initialState
    }

    toggleFilter = () =>{
        this.setState({ShowDonTask: !this.state.ShowDonTask})
    }
    
    getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('stado')
            state = JSON.parse(jsonValue) || initialState
            this.setState(state)
          } catch(e) {
            console.warn('ERRo')
            return null
          }
    }

    addTask = (newTask) =>{
        if(!newTask.desc || !newTask.desc.trim()){
            console.warn('Perigo')
        }else{
            const tasks = [...this.state.tasks]
           tasks.push({
                id: Math.random(),
                desc: newTask.desc,
                estimateAt: newTask.date,
                doneAt:null
            })
            AsyncStorage.setItem('stado',JSON.stringify(tasks))
            this.getData()
            this.setState({tasks,showAddTask:false})
        }
        
    }

    storeData =  value => {
        try {
            const jsonValue = JSON.stringify(value)
             AsyncStorage.setItem('stado',jsonValue)
          } catch(e) {
            console.warn('Erro')
          }
      }

    toggleTask = taskid =>{
        const tasks = this.state.tasks
        tasks.forEach(task=>{
            if(task.id==taskid){
                task.doneAt=task.doneAt?null:new Date()
            }
        })
        this.setState(tasks)
    }

    getRight = id =>{
       const novo = this.state.tasks
       cont = 0
       novo.forEach(ne=>{
            if(ne.id == id){
                novo.splice(cont,1)
            }
            cont = cont +1
        })
       this.setState(novo)
    }
    render(){
        const today = moment().locale('pt-br').format('ddd, D [d] MMMM')
        return (
            
            <View style={styles.container}>
                <Test visivel={this.state.showAddTask} onCancel={()=>this.setState({showAddTask:false})} onSave={this.addTask}/>
                {/*<AddTask isVisible={this.state.showAddTask} onCancel={()=>this.setState({showAddTask:false})}/>*/}
                <ImageBackground source={imgHj} style={styles.background}>
                    <View style={styles.iconBar}>
                        <TouchableOpacity onPress={this.toggleFilter}>
                            <Icon 
                                name={this.state.ShowDonTask ? 'eye' : 'eye-slash' } 
                                size={20} 
                                color='white'
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.barraTitulos}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taslist}>
                    <FlatList 
                        data={this.state.tasks} 
                        keyExtractor={item => `${item.id}`}
                        renderItem={({item})=> this.state.ShowDonTask ?
                            <Task {...item} toggleTask={this.toggleTask} getRight={this.getRight}/> : 
                            item.doneAt == null ?
                            <Task {...item} toggleTask={this.toggleTask} getRight={this.getRight}/> :
                            <View/>
                        }
                    />
                </View>
                <TouchableOpacity 
                    style={styles.addButon} 
                    onPress={()=>this.setState({showAddTask:true})}
                    activeOpacity={0.7}
                > 
                    <View>
                        <Ico name='plus' size={40} color='white'/>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    background:{
        flex:3
    },
    taslist:{
        flex: 7
    },
    barraTitulos:{
        flex:1,
        justifyContent:'flex-end'
    },
    title:{
        fontFamily: estilos.fontFamily,
        fontSize: 50,
        color: estilos.colors.secondary,
        marginLeft: 20,
        marginBottom:20
    },
    subtitle:{
        fontFamily: estilos.fontFamily,
        fontSize: 20,
        color: estilos.colors.secondary,
        marginLeft: 20,
        marginBottom:20        
    },
    iconBar:{
        flexDirection:'row',
        marginHorizontal:20,
        justifyContent:'flex-end',
        marginTop: Platform.OS == 'ios' ? 40 : 10
    },
    addButon:{
        position:'absolute',
        right:30,
        bottom:30,
        height:60,
        width:60,
        borderRadius:30,
        backgroundColor:estilos.colors.dia, 
        alignItems:'center',
        justifyContent:'center'
    }
})