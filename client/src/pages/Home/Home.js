import React, { useState, useEffect } from "react";
import Column from "../../components/Home/Column";
import TodoList from "./todoList.json";
import Layout from '../../components/Layout'
import {openNotification} from "../../Utils/common.util"


export default function Home() {
    const [state, setState] = useState(TodoList);
    const [time, setTime] = useState({minute: 0, second: 0});
    const [ myInterval, setMyInterval ] = useState(0)

    /*
        Check local storage for state values 
        if value present update the state
    */
    useEffect(() =>{
        let listPresent = localStorage.getItem('todoList');
        if(listPresent !== null && listPresent !== undefined) {
            listPresent = JSON.parse(listPresent)
            setState(listPresent)
        }
    },[])


    /*
        Method to maniplate the state ( update the Todo list ) 
        check the status and based on status manipulate the state 
     */
    const updateList = (data, to) => {
        let newList = []
        let process = state.filter(list=> list.status === "On Process")
        process = process.length > 0 ? process.reduce(list=> list) : []

        if(to === 0){
            if(process.todo === null || process.todo === undefined) {
                let obj = {
                    status : "On Process",
                    todo : data.todo
                }
                startTimer()
                newList = [...state]
                newList.forEach((list, index) => {
                    if((list.status === "Bucket List") && (list.todo === data.todo)) {
                        newList.splice(index, 1)
                    }
                })
                newList = [...newList, obj]       
            }else{
                openNotification('failure', 'Already Task in Process', 8);
            }
        }else{
            if(process.todo === data.todo){
                let obj = {
                    status : "Completed",
                    todo : data.todo,
                    time :  time
                }
                newList = [...state]
                newList.forEach((list, index) => {
                    if(list.status === "On Process") {
                        newList.splice(index, 1)
                    }
                })
                newList = [...newList, obj]   
                stopTimer()           
            }else {
                openNotification('failure', 'Sart the Process before completing it', 8);
            }
        }
        if(newList.length > 1){
            localStorage.setItem("todoList", JSON.stringify(newList));
            setState(newList);
        }
    };


    
    // Start the timer for On process tasks.
    const startTimer = () => {
        let myInterval = setInterval(()=>{
            setTime((time)=>{
                return {
                    minute: time.second === 59 ? time.minute + 1 : time.minute,
                    second: time.second === 59 ? 0 : time.second + 1
                } 
            })
        },1000);
        setMyInterval(myInterval)
    }


    // Stop the timer for On process tasks.
    const stopTimer = () => {
        setTime({minute: 0, second: 0})
        clearInterval(myInterval);
    }
       

    return (
        <Layout>
            <div className="todo-container lr-pad-d tb-pad-d g-d g-col-3 g-gap-32">
                <Column todolist={state} status = {"Bucket List"} updateList={updateList} />
                <Column todolist={state} status = {"On Process"} time = {time}  updateList={updateList} />
                <Column todolist={state} status = {"Completed"} updateList={updateList} />
            </div>
            <style jsx={"true"}>
                {`
                    .todo-container {
                        height: 60vh !important;
                    }                    
                `}
            </style>
        </Layout>
    );
}
