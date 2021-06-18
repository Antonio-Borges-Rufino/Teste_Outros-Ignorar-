import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Modal
} from 'react-native'

export default props =>{
    return(
        <Modal onRequestClose={props.onCancel} visible={props.isVisible}
        animationType='slide' transparent={true}>
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Selecionar Nivel:</Text>
                    <TouchableOpacity style={[styles.button, styles.bgEasy]}
                    onPress={()=>props.onLevelSelectd(0.1)}>
                        <Text style={styles.onButtonLevel}>Fácil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.bgNormal]}
                    onPress={()=>props.onLevelSelectd(0.2)}>
                        <Text style={styles.onButtonLevel}>Intermediario</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.bgHard]}
                    onPress={()=>props.onLevelSelectd(0.4)}>
                        <Text style={styles.onButtonLevel}>Dificil</Text>
                    </TouchableOpacity>                                       
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    frame:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'rgba(0,0,0,0.6)'
    },
    container:{
        backgroundColor: '#EEE',
        alignItems:'center',
        justifyContent:'center',
        padding:15
    },
    title:{
        fontSize:30,
        fontWeight:'bold'
    },
    button:{
        marginTop: 10,
        padding: 5
    },
    bgEasy:{
        backgroundColor:'#49b65d'
    },
    bgNormal:{
        backgroundColor:'#2765F7'
    },
    bgHard:{
        backgroundColor:'#F26337'
    },
    onButtonLevel:{
        fontSize:20,
        color: '#EEE',
        fontWeight:'bold'
    }
})