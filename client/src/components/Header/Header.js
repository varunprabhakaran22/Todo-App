import React from 'react'
import {G_HOME_URL } from '../../constants/constants'
import  {Button} from 'antd';

export default function Header() {
    const reset = () => {
        localStorage.clear()
        window.location.href=G_HOME_URL
    }
    return (
        <>
            <div className = "header-container">
                <div className="lr-pad-d f-d f-v-c f-h-sb"> 
                    <h1 className="jr-h1-heading" onClick={() =>window.location.href=G_HOME_URL}> Todo </h1>
                    <Button className="button-secondary "  onClick={() =>reset()}> Reset </Button>
                </div>
            </div>
           <style jsx={"true"}>
                {`
                    .header-container {
                        height: 70px;
                        width: 100vw;
                        background: var(--dove);
                        box-shadow: var(--peaky-shadow-nav);
                        position:fixed;
                        top: 0;
                        left: 0;
                        z-index: 1000;
                    }

                    .header-container .jr-h1-heading{
                        // padding:1rem;
                        font-size: calc((102% + 0.25vw) * 2);
                        cursor:pointer;
                    }
                `}
            </style> 
        </>
    )
}
