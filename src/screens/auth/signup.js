import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input } from '@rneui/themed';
import { Button } from '@rneui/themed';
export default function LoginPage () {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>        
        <Text style={styles.header1}>Bắt đầu nào!</Text>
        <Text style={styles.header2}>Tạo một tài khoản</Text>
        <Input
        placeholder="Họ và tên"
        leftIcon={{ type: 'font-awesome', name: 'phone'  }}
        onChangeText={value => this.setState({ comment: value })}
        
        inputStyle={{ padding: 0 }} 
        inputContainerStyle ={styles.input}
        containerStyle={styles.containerInput}
        />
        <Input        
        placeholder="Số điện thoại của bạn"
        leftIcon={{ type: 'font-awesome', name: 'user' }}
        onChangeText={value => this.setState({ comment: value })}

        inputStyle={{ padding: 0 }} 
        inputContainerStyle ={styles.input}
        containerStyle={styles.containerInput}
        />
        <Input
        placeholder="Email"
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={value => this.setState({ comment: value })}
        inputStyle={{ padding: 0 }} 
        inputContainerStyle ={styles.input}
        containerStyle={styles.containerInput}
        />
        
        <Input 
        placeholder="Mật khẩu" 
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        secureTextEntry={true}
        inputStyle={{ padding: 0 }} 
        inputContainerStyle ={styles.input}
        containerStyle={styles.containerInput}
        /> 
        
        <Input 
        placeholder="Nhập lại mật khẩu" 
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        secureTextEntry={true}
        inputStyle={{ padding: 0 }} 
        inputContainerStyle ={styles.input}
        containerStyle={styles.containerInput}
        />        
        <Button color="#F6AC31" style={styles.button} containerStyle={styles.btn}>Đăng ký</Button>        
        <Text >Đã có tài khoản? {' '}          
          <Text 
            style={{color: '#F6AC31',fontSize:15}}
            onPress={() => Linking.openURL('')}>
            Đăng nhập ngay
          </Text>
        </Text>        
        
        
    </View>
  )
}
const styles = StyleSheet.create({
  header1: {
    fontSize: 25,
    fontWeight:'bold',
  
  },
  header2: {
    fontSize:18,
    color: "#979797",
    marginTop: 20,
    marginBottom:40
  },
  button: {
    marginTop: 25,
    marginBottom:15
  },
  btn: {
    width :'90%',
    borderRadius:8

  },
  containerInput: {
    borderWidth: 1, 
    borderRadius:8,
    width:'90%',
    height: '5%',
    alignItems:'center',
    marginBottom:15
  },
  input: {
    borderBottomWidth:0.5,
    height:'100%'
  },
  
  
});

