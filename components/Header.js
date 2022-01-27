 
import React  from 'react';
import { View,Text,StyleSheet} from 'react-native';

const Header =(prps)=>{
  return(
     <View style={styles.Header}> 
    <Text style={styles.text}>{prps.title}</Text>
    
     </View>
  )
}

Header.defaultProps={
    title:'My Books List1'
}


const styles = StyleSheet.create({
    Header:
  {
    height:60,
    padding:15,
    backgroundColor:'darkblue'
  },
  text:{
      color:'#fff',
      fontSize:24,
      textAlign:'center'
  }
})


export default Header;
