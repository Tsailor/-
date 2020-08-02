let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const checkFilter = (filter) =>({
    type: "SET_VISIBILITY_FILTER",
    filter
})