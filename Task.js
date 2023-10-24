import {Text, View, TouchableOpacity} from "react-native";
import {  useNavigate } from "react-router-native";


function Task(props) {
    const Navigate= useNavigate()
    const Data=new Date ()
    return <View>
        <View>
            <Text style={{justifyContent: "center", fontSize: 20, fontFamily:'cambria',marginTop: 40,}}>
                je ne suis pas malade mais au contraire j'ai la vie de Dieu en moi
            </Text>
        </View>
        <View 
        style={{
            fontSize: 20,
            textAlign: "center",
            marginTop: 20,
            fontWeight: "bold",
        }}>
            Data :{Data. toDateString()}
        </View>
        <View style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <TouchableOpacity
            onPress={()=>{
                Navigate('/list')
            }}
            style={{
                backgroundColor: "green",
                padding: 10,
                width: 128,
                borderRadius: 20,
                marginTop: 20,
                fontFamily:'cambria'
            }}>    
                <Text style={{color: "white", textAlign: "center",fontWeight: "bold",fontFamily:'cambria'}}>
                    Fait
                </Text>
            </TouchableOpacity>
        </View>
        <View style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
        <TouchableOpacity
            onPress={()=>{
                Navigate('/list')
            }}
            style={{
                backgroundColor: "red",
                padding: 10,
                width: 128,
                borderRadius: 20,
                marginTop: 20,
            }}>    
                <Text style={{color: "white", textAlign: "center",fontWeight: "bold",fontfamily: 'cambria',}}>
                    Retour
                </Text>
            </TouchableOpacity>
        </View>
    </View>
}

export  default Task;