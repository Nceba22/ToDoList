 import React from 'react'
import { StyleSheet, Text, View,  TouchableOpacity  } from 'react-native';

const Note = ({ data, onDelete }) => {
    const {date, note, details} = data;
    
//props dynamic data
    return (

        <View style={styles.note}>
            <Text style={styles.noteText}>{date}</Text>
            <Text style={styles.noteText}>{note}</Text>
            <Text style={styles.noteText}>{details}</Text>

            <TouchableOpacity onPress={onDelete} style={styles.noteDelete}>
                <Text style={styles.noteDeleteText}>X</Text>

            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    
    note:{
        position: 'relative',
        paddingRight:100,
        paddingTop: 20,
        borderBottomWidth:2, 
        borderBottomColor:'#ededed'
    },
    noteText:{
       paddingLeft:20,
       borderLeftWidth:10,
       borderLeftColor: '#ededed',
       fontSize: 24,
    },    
    noteDelete: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent:  'center',
        bottom: 10,
        right: 10,
        padding: 10,
        top:10,
        backgroundColor: '#eb3148',
    },
    noteDeleteText:{
        color: 'white',
        fontWeight:'700',
        fontSize:24,
    }
});

export default Note;