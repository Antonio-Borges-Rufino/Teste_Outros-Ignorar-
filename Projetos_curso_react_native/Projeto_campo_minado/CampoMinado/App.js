import React, {Component} from 'react'
import {StyleSheet, Text, View, Alert} from 'react-native'
import params from './src/parans'
import Field from './src/componentes/Field'
import MineField from './src/componentes/MineField'
import Header from './src/componentes/Hearder'
import LevelSelection from './src/screens/LevelSelection'
import {
  createMineBoard,
  openField,
  cloneBoard,
  headExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed
} from './src/Functions'

export default class App extends Component{

  constructor (props){
    super(props)
    this.state = this.createState()
  }


  minesAmount = () =>{
    const cols = params.getColumnsAmount()
    const rows = params.getRownsAmount()
    return Math.ceil(cols*rows*params.dificuldade)
  }

  createState = () => {
    const coals = params.getColumnsAmount()
    const rows = params.getRownsAmount()
    return{
      board : createMineBoard(rows, coals, this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false
    }
  }

  onOpenField = (row, column) =>{
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = headExplosion(board)
    const won = wonGame(board)

    if(lost){
      showMines(board)
      Alert.alert('Derrota')
    }

    if(won){
      Alert.alert('Vitoria')
    }

    this.setState({board, lost, won})
  }

  onSelectField = (row,column)=>{
    const board = cloneBoard(this.state.board)
    invertFlag(board,row,column)
    const won = wonGame(board)

    if(won){
      Alert.alert('Vitoria')
    }

    this.setState({board, won})

  }

  onLevelSelectd = (level) =>{
      params.dificuldade = level
      this.setState(this.createState())
  }

  render(){
    return(
      <View style={styles.container}>
          <LevelSelection isVisible={this.state.showLevelSelection}
          onLevelSelectd={this.onLevelSelectd} onCancel={()=>this.setState({showLevelSelection:false})}/>
          <Header flagsLeft = {this.minesAmount() - flagsUsed(this.state.board)}
              onNewGame = {()=>this.setState(this.createState())}
              onFlagPress={()=>this.setState({showLevelSelection:true})}/>
        <View style={styles.board}>
          <MineField board={this.state.board} onOpenField={this.onOpenField} onSelectField={this.onSelectField}/>
        </View>
      </View>
    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board:{
    alignItems:'center',
    backgroundColor:'#AAA'
  }

})
