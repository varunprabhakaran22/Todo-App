import React from "react";
import Task from './Task'

export default function Column({ todolist, status, time, updateList}) {

    // Send individual Task as props
    const renderList = () => {
        let list = todolist?.filter(list => list.status === status)
            .map((list, index) => <Task list = {list} key={index} updateList = {updateList} status = {status} time={time ? time: null} />);

        return list;
    };


    return (
        <>
            <div className="column-container tb-pad-d-2 lr-pad-d-2 ">
                <span className="jr-h2-heading heading"> {status} </span> 
                {renderList()}
            </div>
            <style jsx={"true"}>
                {`
                    .column-container {
                        border:1px solid var(--snowfall);
                    }

                    .column-container .heading{
                        margin-bottom:2rem;
                    }

                    .add-todo{
                        float:right;
                        cursor:pointer;
                    }
                `}
            </style>
        </>
    );
}
