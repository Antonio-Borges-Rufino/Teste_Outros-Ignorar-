import { Dimensions } from "react-native";

const params = {
    blockSize: 30,
    borderSize: 5, 
    fontSize: 15,
    headerRatio: 0.15, //Proporção do painel superior da tela
    dificuldade: 0.1,
    getColumnsAmount(){
        const width = Dimensions.get('window').width
        return( Math.floor(width/params.blockSize))
    },
    getRownsAmount(){
        const totalHeight = Dimensions.get('window').height
        const boardHeight = totalHeight*(1 - params.headerRatio)
        return (Math.floor(boardHeight/params.blockSize))
    }
}

export default params