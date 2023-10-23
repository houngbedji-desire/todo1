import { StyleSheet, View, StatusBar, Text } from 'react-native';
import { NativeRouter, Route, Routes } from "react-router-native";
import Home from "./Home";
import Liste from "./Liste";
import Task from "./Task";
import Add from "./Add";

export default function App() {
  return (
   <NativeRouter>
      <View style={styles.container}>
            <Text style={{
                fontSize:80,
                fontFamily:'cambria',
            }}>TAF</Text>
            <StatusBar style="auto" />
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/list"} element={<Liste/>}/>
                <Route path={"/add"} element={<Add/>}/>
                <Route path={"/task/:id"} element={<Task/>}/>
            </Routes>
      </View>
   </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily:'cambria',
  },
});
