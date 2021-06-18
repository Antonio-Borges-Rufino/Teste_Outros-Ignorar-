import React, {useState} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet, 
    ImageBackground, 
    TextInput, 
    Button, 
    ScrollView,
    Dimensions,
    Image,
    Modal
} from 'react-native' 
import Icon from 'react-native-vector-icons/EvilIcons'
import imgHj from '../../source/LOGO2.jpg'


function TelaAtividades(props){
    const [ena,setEna]=useState(0)
    var [modalView,setModalView]=useState(0)
    var [desc,setDesc] = useState('')
    var [idDel,setId] = useState(null)


    const InsertDados = async (desc,matrel) => { 
        try {
            let response = await fetch('http://192.168.100.19/SoAtividade/Create.php',{
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({'descricao':desc,'id':matrel})
            }) 
            let json = await response.json();
            setModalView(0)
            //console.warn(json) 

          } catch (error) {
            console.error(error);
          }
        }
        const DeleteDados = async (desc) => { 
            //console.warn(desc)
            try {
                let response = await fetch('http://192.168.100.19/SoAtividade/Delete.php',{
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({'id':desc})
                }) 
                let json = await response.json();
                //setModalView(0)
                setEna(0)
                //console.warn(json) 
              } catch (error) {
                console.error(error);
              }
            }

    function viewDados(count){
        const dados = props.dados
        const tipo = String(count)
        contador = 0
        function d(idTipo){
            //console.warn(idTipo)
            setEna(1)
            setId(idTipo)
        }
        function c(){
            setEna(0)
        }
        if(dados!=null){
            return(
                <TouchableOpacity onPress={()=>{d(dados[tipo].id)}} onLongPress={()=>{c()}}>
                    <View style={style.informacoes2}>
                        <Text style={{height:20}}>{dados[tipo].descricao}</Text>
                        <Text style={{height:20}}>{dados['1'].nome}</Text>
                    </View>       
                </TouchableOpacity>

                
            )
        }
    }

    function modal (cont){
        return(
            <View>
                <ScrollView>
                    {props.tamanho>0?viewDados(cont+1):<Text>''</Text>}
                    {<Text>{cont<props.tamanho?modal(cont+1):''}</Text>}
                </ScrollView>
            </View>
        )
    }

    function modalViewAdd(){
        const dados = props.dados
        return(
            <Modal animationType='slide' transparent={true}  style={{flex:1,position:'absolute'}}>
                <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.7)'}}>
                    <TouchableOpacity style={{flex:1}} onPress={()=>setModalView(0)}>
                        <View style={{flex:1}}>

                        </View>
                    </TouchableOpacity>
                    <View style={{flex:1,backgroundColor:'white'}}>
                            <TextInput 
                            placeholder='Descrição'
                            value={desc} 
                            onChangeText={value=>setDesc(value)}
                            />
                            <Button title='Salvar' onPress={()=>{InsertDados(desc,dados["1"].matricula)}}/>
                    </View>
                    <TouchableOpacity style={{flex:1}} onPress={()=>setModalView(0)}>
                        <View style={{flex:1}}>

                        </View>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }

    return(
        <View style={style.container}>
            <View style={{flex:1, backgroundColor:'rgb(18,144,203)',alignItems:'center'}}>
                    <Image style={{flex:1,alignItems:'center'}} source={imgHj}/>  
            </View>
            <View style={style.areaAvt}>
                {modal(1)}
            </View>
            <View style={style.acoesAreaProfessor}>
                {ena==0? <Icon name='trash' size={50} color='white'/> :<Icon.Button 
                    name='trash' 
                    backgroundColor='rgb(18,144,203)'
                    size={50}
                    enable={false} 
                    color='red' 
                    onPress={()=>{DeleteDados(idDel)}}
                />}
                <Icon.Button 
                    name='plus' 
                    backgroundColor='rgb(18,144,203)'
                    size={50} 
                    color='white' 
                    onPress={()=>{setModalView(1)}}
                />
            </View>
            {modalView!=0?<View>{modalViewAdd()}</View>:<View/>}
        </View>
    )
}

const dimem = Dimensions.get('window').width;

const style= StyleSheet.create({
    container:{
        flex:1
    },
    areaAvt:{
        flex:8,
        alignItems:'center',
        marginTop:10
    },
    acoesAreaProfessor:{
        flex:1,
        backgroundColor:'rgb(18,144,203)',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        justifyContent:'space-between',
        alignContent:'space-between'
    },
    informacoes2:{
        width: dimem-15,
        height:50,
        backgroundColor:'white',
        borderRadius:7,
        marginRight:0,
        alignItems:'center',
        borderWidth:3,
        borderColor:'#D3D3D3',
        marginBottom:5
    }
})


export {TelaAtividades}