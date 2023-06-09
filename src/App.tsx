import React from 'react';
import './App.css';
import {TasksType, Todolist} from "./components/Todolist";

export function App() {
    const tasks1:TasksType[] = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ]
    const tasks2:TasksType[] = [
        {id: 1, title: "Hello world", isDone: true},
        {id: 2, title: "I am Happy", isDone: false},
        {id: 3, title: "Yo", isDone: false}
    ]

    return <div>
        <Todolist title="What to learn" tasks={tasks1}/>
        <Todolist title="Songs" tasks={tasks2}/>
    </div>
        ;
}

export default App;

