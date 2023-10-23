import {Text, View} from "react-native";
import TaskItem from "./TaskItem";

function List(props) {
    return <View>
        <Text>List</Text>
        <View>
            <TaskItem description={"jesuisle"}/>
        </View>
    </View>
}

export  default List;