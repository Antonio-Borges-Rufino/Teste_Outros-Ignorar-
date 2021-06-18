import React, {Component} from 'react'
import {View, 
        Text, 
        StyleSheet, 
        TouchableWithoutFeedback, TouchableOpacity, } from 'react-native'
import Estilos from '../estilosComuns'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import 'moment/locale/pt-br'

export default props=>{

    const doneOrNotStyle = props.doneAt != null? {textDecorationLine:'line-through'}:{}

    const date = props.doneAt ? props.doneAt : props.estimateAt
    const dataFormatada = moment(date).locale('pt-br').format('ddd, D [de] MMMM')

    return(
            <View style={style.container}>
                <TouchableWithoutFeedback onPress={()=>props.toggleTask(props.id)}>
                    <View style={style.checkContainer}>
                        {getCheckView(props.doneAt)}
                    </View>     
                </TouchableWithoutFeedback>
                <View>
                    <Text style={[style.desc, doneOrNotStyle]}>{props.desc}</Text>
                    <Text style={style.date}>{dataFormatada}</Text>
                </View>  
                <View style={[style.lixeira]}>
                    <TouchableWithoutFeedback onPress={()=>props.getRight(props.id)}>
                        <Icon name='trash' size={30} color='red'/>
                    </TouchableWithoutFeedback>  
                </View>            
            </View>                
    )
}

function getCheckView(doneAt){
    if(doneAt!=null){
        return(
            <View style={style.done}>
                <Icon name='check' size={20} color='black'/>
            </View>
        )
    }else{
        return(
            <View style={style.pending}>
            </View>
        )
    }

}

const style = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderColor:'#AAA',
        borderBottomWidth:3,
        alignItems:'center',
        paddingVertical:10
    },
    checkContainer:{
        width: '20%',
        justifyContent:'center',
        alignItems: 'center'
    },
    pending:{
        height:25,
        width:25,
        marginLeft:12,
        borderRadius:13,
        borderWidth:1,
        borderColor:'#555'
    },
    done:{
        height:25,
        marginLeft:12,
        width:25,
        borderRadius:13,
        backgroundColor:"#4D7031", 
        justifyContent:'center',
        alignItems: 'center'       
    },
    desc:{
        fontSize:15,
        color:Estilos.colors.textosP
    },
    date:{
        color: Estilos.colors.subText,
        fontSize:12
    },
    lixeira:{
        //height:25,
        //width:25,
        //borderRadius:13,
        position:'absolute',
        marginLeft:2,
        //backgroundColor:"#FF0000", 
        justifyContent:'flex-end',
        alignItems: 'flex-end'          
    }
})
