import React from 'react';
import { useEffect, useRef } from 'react';
import { Popover } from 'bootstrap';
import './index.css';

export default function BSExample() {
    const popoverRef = useRef();
    useEffect(() => {
        new Popover(popoverRef.current, {
            content: "Hello popover content!",
            title: "My Popover"
        })
    })

    return (
        <button className="btn btn-lg btn-danger" ref={popoverRef}>
            Click to toggler popover
        </button>
    )
}
