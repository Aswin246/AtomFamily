import { todos } from "./todo";
import {atomFamily} from "recoil";

export const TodoList = atomFamily({
  key: 'TodoList',
  default: (id) => {
   return todos.find((i) => i.id === id);
  },
});
