import React from "react";
import { FaBeer } from 'react-icons/fa';

export default function Footer() {
    return(
        <div className="grid grid-cols-2 gap-4">
            <div className="">
                Calendly <FaBeer />
            </div>
            <div className="">
                Contact info
            </div>
        </div>
    )
}