import {Text, TouchableOpacity, View} from "react-native";
import {useNavigate} from "react-router-native";

function Home(props) {
    const navigate = useNavigate()
    return <View style={{width: '100vw'}}>
        <View style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <View style={{margin: 30}}>
                <Text style={{fontSize: 20, fontWeight: "bold",fontFamily:'cambria'}}>1234</Text>
                <Text style={{fontSize: 20,fontFamily:'cambria'}}>Total</Text>
            </View>
            <View style={{ margin: 30,}}>
                <Text style={{color: 'red', fontSize: 20, fontWeight: "bold",fontFamily:'cambria'}}>1234</Text>
                <Text style={{color: 'red', fontSize: 20,fontFamily:'cambria'}}>A Faire</Text>
            </View>
            <View style={{margin: 30}}>
                <Text style={{color: 'green', fontSize: 20, fontWeight: "bold",fontFamily:'cambria'}}>1234</Text>
                <Text style={{color: 'green', fontSize: 20,fontFamily:'cambria'}}>Fait</Text>
            </View>
        </View>
        <View>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <View>
                    <View style={{margin: 15}}>
                        <TouchableOpacity
                            onPress={() => {
                                navigate("/add")
                            }}
                            style={{
                                backgroundColor: "silver",
                                padding: 10,
                                width: 128,
                                borderRadius: 20,
                                
                            }}>
                            <Text style={{textAlign: "center",fontWeight: "bold",fontFamily:'cambria'}}>Ajouter</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{margin: 15}}>
                        <TouchableOpacity
                            onPress={() => {
                                navigate("/list")
                            }}
                            style={{
                                backgroundColor: "silver",
                                padding: 10,
                                width: 128,
                                borderRadius: 20,
                            }}>
                            <Text style={{textAlign: "center",fontWeight: "bold",fontFamily:'cambria'}}>List</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    </View>
}

export default Home