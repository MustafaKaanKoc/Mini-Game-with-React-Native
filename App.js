import { Component, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView ,Dimensions ,TouchableOpacity} from 'react-native';




 class App extends Component {
  constructor(props){
    super(props);
    this.state={
      score:0,
      timer:10,
      isGameOver:false,
      colorOfBall:Math.floor(Math.random() * 9) + 1,
      canIncrement:0,
    }
    this.timer=0;
  }
  incrementCount = () => {  

    this.setState({
      score: this.state.score + 1,      
      canIncrement:this.state.canIncrement + 1,

      colorOfBall : Math.floor(Math.random() * 9) + 1,
    })

    if (this.state.canIncrement % 10 == 9 && this.state.canIncrement >= 9){
      this.setState({
      timer:this.state.timer+10,
      canIncrement:0,

    })

    }
  }

  decrementCount = () => { 

    if(this.state.timer > 0){
      this.setState({
        timer:this.state.timer - 2,

      })
    }
    this.setState({
      score: this.state.score - 1,      
      colorOfBall : Math.floor(Math.random() * 9) + 1,
      canIncrement:this.state.canIncrement - 1,
    })

  
  }
  componentDidMount=()=>{
    this.timer= setInterval(() => {
      this.interval();  
    }, 1000);



  }    
  interval=() =>{
    if(this.state.timer > 0){
      this.setState({
        timer: this.state.timer - 1      
    })
    }
 

  if(this.state.timer <= 0){
   this.gameOver();
  }
  }
  gameOver  = () =>{
    clearInterval(this.timer);
    this.setState({
      isGameOver:true
    })
  }

  xd = () =>{
    this.setState({
      score:0,
      timer:10,
      isGameOver:false,
      colorOfBall:Math.floor(Math.random() * 9) + 1,
      canIncrement:0,

    })
    this.timer= setInterval(() => {
      this.interval();
    }, 1000);
  }



  render(){
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
  
        {!this.state.isGameOver && 
        <View style={styles.gameScreen}>     
             
          <View style={styles.mainBallContainer}>
          <Text style={styles.scoreLabelText}>{this.state.timer}</Text>

            <View  style={styles.ballContainer}>
            {this.state.colorOfBall == 1 ? <TouchableOpacity onPress={this.incrementCount} style={styles.ball2}/> : <TouchableOpacity onPress={this.decrementCount} style={styles.ball}/>}
            {this.state.colorOfBall == 2 ? <TouchableOpacity onPress={this.incrementCount} style={styles.ball2}/> : <TouchableOpacity onPress={this.decrementCount} style={styles.ball}/>}
            {this.state.colorOfBall == 3 ? <TouchableOpacity onPress={this.incrementCount} style={styles.ball2}/> : <TouchableOpacity onPress={this.decrementCount} style={styles.ball}/>}
            </View>
            
            <View  style={styles.ballContainer}>
            {this.state.colorOfBall == 4 ? <TouchableOpacity onPress={this.incrementCount} style={styles.ball2}/> : <TouchableOpacity onPress={this.decrementCount} style={styles.ball}/>}
            {this.state.colorOfBall == 5 ? <TouchableOpacity onPress={this.incrementCount} style={styles.ball2}/> : <TouchableOpacity onPress={this.decrementCount} style={styles.ball}/>}
            {this.state.colorOfBall == 6 ? <TouchableOpacity onPress={this.incrementCount} style={styles.ball2}/> : <TouchableOpacity onPress={this.decrementCount} style={styles.ball}/>}  
            </View>
  
            <View  style={styles.ballContainer}>
            {this.state.colorOfBall == 7 ? <TouchableOpacity onPress={this.incrementCount} style={styles.ball2}/> : <TouchableOpacity onPress={this.decrementCount} style={styles.ball}/>}
            {this.state.colorOfBall == 8 ? <TouchableOpacity onPress={this.incrementCount} style={styles.ball2}/> : <TouchableOpacity onPress={this.decrementCount} style={styles.ball}/>}
            {this.state.colorOfBall == 9 ? <TouchableOpacity onPress={this.incrementCount} style={styles.ball2}/> : <TouchableOpacity onPress={this.decrementCount} style={styles.ball}/>}
 
            </View>
            
  
          </View>
  
  
          <View style={styles.scoreLabel}>
            <Text style={styles.scoreLabelText}>{this.state.score} </Text>

          </View>
        </View>}
        
  

      {/* GAME OVER PAGE */}
      {this.state.isGameOver && <View style={styles.gameOverScreen}>
          <Image
            style={styles.gameoverLogo}
            source={require('./gameover.jpg')}
          />
          
          <Text style={styles.gameOverText}>Your score is {this.state.score}</Text>
          <TouchableOpacity onPress={this.xd} style={styles.tryAgain} >
            <Text style={styles.tryAgainText} >Try Again</Text>
          </TouchableOpacity>
        </View>}
       
      </View>
    );
  }
  
}
export default App;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8EDE3', 

  },
  gameScreen:{
  },
  mainBallContainer:{
    height:"90%",
    width:"100%",
    alignItems:'center',
    justifyContent: "space-evenly",
  },
  ballContainer:{
    alignItems:'center',
    justifyContent: "flex-start",
    flexDirection:'row',
    width:"100%",
    paddingLeft:"7%",
  },
  ball:{
    width:100,
    height:100,
    borderRadius:100,
    backgroundColor:'#85586F',
    marginRight:2,
    marginLeft:2,
    
  },
  ball2:{
    width:100,
    height:100,
    borderRadius:100,
    backgroundColor:'red',
    marginRight:2,
    marginLeft:2,
    
  },


  scoreLabel:{
    alignItems:'center',
    justifyContent:'center',

  },
  scoreLabelText:{
    fontSize:30,
  },
  gameOverScreen:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"black",
    width:"100%",
    height:"100%",
   },
  gameOverText:{
    color:'white',
    fontSize:30,
    paddingBottom:20,
  },
  tryAgain:{
    width:100,
    height:50,
    backgroundColor:'white',
    borderRadius:100,
    alignItems:'center',
    justifyContent:'center',
  },

  tryAgainText:{
    fontSize:20,
  },

  gameoverLogo:{
    width:"100%",
    height:"30%",
    
  },
});
