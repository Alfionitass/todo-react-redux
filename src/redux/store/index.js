import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/index";
//import {loadState} from "../components/TodoApp";

function saveState(todo) {
    try {
        const serializedState = JSON.stringify(todo);
        localStorage.setItem('todolist', serializedState);
    } catch (err) {
        console.log ("error", err)
    }
};

function loadState() {
    try {
        const serializedState = localStorage.getItem('todolist');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.log ("error", err);
    }
};

const persistedState = loadState();
const store = createStore(
    rootReducer,
    persistedState, 
    composeWithDevTools()
);

store.subscribe(() =>
  saveState(store.getState())
);

export default store;