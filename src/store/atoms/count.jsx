/*
import { atom,selector } from "recoil";

 export const countAtom = atom({
      key:"countAtom",
      default: 0
});
export const evenSelector = selector({
    key:"evenSelector",
    get:({get})=> {
        const count =get(countAtom);
        return count % 2 == 0 ;
    }
})
*/

import { atom, selector } from "recoil";

// Atom for the list of todos
export const todosAtom = atom({
  key: "todosAtom", // Unique ID
  default: [], // Default state as an empty array
});

// Selector to get the current list of todos
export const todosSelector = selector({
  key: "todosSelector",
  get: ({ get }) => {
    const todos = get(todosAtom);
    return todos;
  },
});

// Selector to filter todos
export const filteredTodosSelector = selector({
  key: "filteredTodosSelector",
  get: ({ get }) => {
    const todos = get(todosAtom);
    return todos.filter((todo) => todo.title.toLowerCase().includes("filter")); // Example filter
  },
});
