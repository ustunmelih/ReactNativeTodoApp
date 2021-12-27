import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';

const App = () => {
  const [toDo, setToDo] = useState([]);

  const renderTodo = ({item}) => (
    <TodoItem setToDo={setToDo} todo={toDo} todoData={item} />
  );
  const toDoLength = toDo.filter(todo => !todo.completed).length;

  return (
    <SafeAreaView style={styles.container}>
            <Image source = {{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/To_Do.svg/1257px-To_Do.svg.png'}}
   style = {{ width: 100, height: 100, }}
   />

      <Text style={styles.title}>To-Do List: {toDoLength}</Text>
      <AddTodo toDo={toDo} setToDo={setToDo} />
      <View style={styles.listContainer}>
        <FlatList data={toDo} renderItem={renderTodo} />
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listContainer: {
    flex: 1,
  },
});
