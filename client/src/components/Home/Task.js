import React from 'react'

/* 
    Component to render Task 
    Conditional render the Task's Functionalities 
*/
export default function Task({list,status, updateList, time}) {
    return (
        <>
            {list.todo !== undefined && list.todo !== null && 
                <div className="list-container"> 
                    <h3 className="h2-heading"> {list.todo} </h3>
                    <div className="settings ">
                        {status === "Bucket List" ? 
                            <div className="g-d g-col-2">
                                <div className="timer h4-heading" onClick={() =>updateList(list, 0)}> Start </div>
                                <div className="complete h4-heading" onClick={() =>updateList(list, 1)}>  Completed </div>
                            </div> : 
                            status === "On Process" ? 
                                <div className="g-d g-col-2">
                                    <div className="stopwatch h4-heading">
                                        {` ${time.minute < 10 ? "0" + time.minute : time.minute}: ${time.second < 10
                                        ? "0" + time.second
                                        : time.second} elapsed `}
                                    </div>
                                    <div className="complete h4-heading" onClick={() =>updateList(list, 1)}>  Completed </div>
                                </div> : 
                            <>
                                <div className="timer h4-heading" > 
                                    {`${list.time?.minute !== 0 ? list.time?.minute + " Minute Elapsed": list.time?.second + " Seconds Elapsed"} `} 
                                </div>
                            </>
                        }
                    </div>
                </div>
            }           
            <style jsx={"true"}>
                {`
                    .list-container {
                        margin:1rem 0;
                        padding: 1rem;
                        min-height:100px;
                        border: 1px solid var(--snowfall);
                    }

                    .list-container .settings{
                        margin-top: 1rem;
                        cursor:pointer;
                `}
            </style>
        </>
    )
}
