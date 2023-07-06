import React from "react";

import { projects } from "../data"

export default function About() {
    return(
        <div className="grid grid-cols-4 gap-4">
            {projects.map((proj) => 
                <div className="bg-blue-100 "> 
                    <h2 className="p-1 border rounded-full px-3">{proj.title}</h2>
                </div>
                )}
        </div>
    )
}