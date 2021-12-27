import React, { memo, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./TodoItem.style";

const TodoItem = ({ todo, todoData, setToDo }) => {
  const [isCompleted, setIsCompleted] = useState(todoData.completed);

  const handleComplete = () => {
    setToDo(
      todo.map((item) =>
        item.id === todoData.id ? { ...item, completed: !isCompleted } : item
      )
    );
    setIsCompleted(!isCompleted);
  };
  const handleDelete = () =>
    setToDo(todo.filter((item) => item.id !== todoData.id));
  return (
    <TouchableOpacity
      style={[styles.container, isCompleted && styles.containerCompleted]}
      onPress={handleComplete}
      onLongPress={handleDelete}>
      <Text style={[styles.title, isCompleted && styles.titleCompleted]}>
        {todoData.title}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(TodoItem);
