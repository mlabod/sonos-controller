import React from 'react';
import { Provider } from 'react-redux';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';
import store from '../store';


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
