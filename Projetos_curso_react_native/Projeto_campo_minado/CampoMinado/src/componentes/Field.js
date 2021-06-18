import React from 'react'
import {Text,View,StyleSheet, TouchableWithoutFeedback} from 'react-native'
import Params from '../parans'
import Mine from './Mine'
import Flag from './Flag'

export default props =>{
    const { mined, opened, nearMines, exploded, flagged} = props

    const styleField = [styles.field]
    if(opened){ styleField.push(styles.opened)}
    if(exploded){ styleField.push(styles.exploded)}
    if(flagged){ styleField.push(styles.flagged)}
    if(!opened && !exploded){ styleField.push(styles.regular)}

    let color = null

    if(nearMines > 0){
        if(nearMines==1){color = '#FFA500'}
        if(nearMines==2){color = '#FF8C00'}
        if(nearMines>2 && nearMines<6){color = '#FF4500'}
        if(nearMines>=6){color = '#FF0000'}
    }

    return(
        <TouchableWithoutFeedback onPress={props.onOpen} onLongPress={props.onSelect}>
            <View style={styleField}>
                {!mined && opened && nearMines>0 ?
                    <Text style={[styles.label, {color: color}]}>
                        {nearMines}</Text> : false}
                {mined && opened ? <Mine/> : false}
                {flagged && !opened? <Flag/> : false}
            </View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    field:{
        height: Params.blockSize,
        width: Params.blockSize,
        borderWidth: Params.borderSize
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor:'#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333'
    },
    opened:{
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent:'center'
    },
    label:{
        fontWeight: 'bold',
        fontSize: Params.fontSize
    },
    exploded:{
        backgroundColor: 'red',
        borderColor: 'red'
    }
})