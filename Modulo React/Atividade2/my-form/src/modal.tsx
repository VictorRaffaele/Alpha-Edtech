import React from "react";

export function Modal (props: any){
    
    const background = {
        width : '100%',
        height : '100%',
        zIndex : '5',
        backgroundColor : 'rgba(0,0,0,.8)',
        position : props.position,
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center'
    }

    const divInfo = {
        width : '50%',
        height : '65%',
        backgroundColor : 'gray',
        boxShadow : '2px 2px 2px black'
    }

    const topBar = {
        width : '100%',
        backgroundColor : 'lightGray',
        display : 'flex',
        justifyContent : 'flex-end'
    }
    if (!props) {
        return <></>;
    } else{
        return (
        <div style={background} onClick={() =>{props.opened[1](false)}}>
            <div style={divInfo} onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                <div style={topBar}>
                    <button onClick={() =>{props.opened[1](false)}}>X</button>
                </div>
            </div>
        </div>
        );    
    }
}