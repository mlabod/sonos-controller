import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';
import todoApp from '../reducers';

let store = createStore(todoApp)

const TodoApp = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
);

export default (
  <Provider store={store}>
    <TodoApp />
  </Provider>
)
