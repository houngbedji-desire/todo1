import React, {useState} from 'react';
import {Button, InputAccessoryView, ScrollView, TextInput} from 'react-native';
import {Text, TouchableOpacity, View} from "react-native";
import {useNavigate} from "react-router-native";

const Add = () => {
  const navigate = useNavigate()
  const inputAccessoryViewID = 'uniqueID';
  const initialText = '';
  const [text, setText] = useState(initialText);
  
  return (
    <>
      <ScrollView keyboardDismissMode="interactive">
        <TextInput
          style={{
            padding: 16,
            marginTop: 50,
            height:200,
            width:400,
            backgroundColor: "silver"
          }}
          inputAccessoryViewID={inputAccessoryViewID}
          onChangeText={setText}
          value={text}
          placeholder={'Entrez votre texte'}
          multiline
        />
      </ScrollView>
      <InputAccessoryView nativeID={inputAccessoryViewID}>
      </InputAccessoryView>
    <View style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <View>
                <View style={{margin: 15}}>
                    <TouchableOpacity
                      onPress={() => {
                          navigate("/task/"+12345)
                      }}
                      style={{
                      backgroundColor: "green",
                      padding: 10,
                      width: 128,
                      borderRadius: 20,
                      }}>
                <Text style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily:'cambria',
                  color: "white",
                  }}>Enregistrer
                  </Text>
            </TouchableOpacity>
     </View>
     <View style={{margin: 15}}>
            <TouchableOpacity
                onPress={() => {
                    navigate("/Home")
                }}
                style={{
                backgroundColor: "red",
                padding: 10,
                width: 128,
                borderRadius: 20,
                }}>
             <Text style={{
              textAlign: "center",
              fontWeight: "bold",
              fontFamily:'cambria',
              color: "white",
              }}>Annuler
              </Text>
            </TouchableOpacity>
     </View>
                </View>

    </View>  
      
    </>
);

  
};
export default Add
