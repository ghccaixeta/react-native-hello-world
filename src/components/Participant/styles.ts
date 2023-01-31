import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#6272a4',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    name:{
        flex: 1,
        color: '#282a36',
        fontSize: 18,
        padding: 10,
    },
    buttonText:{
        color: '#f8f8f2',
        fontSize: 30,
      },
      button:{
        borderRadius: 5,
        width: 56,
        height: 56,
        backgroundColor: '#ff5555',
        alignItems: 'center',
        justifyContent: 'center',
        
      },

})