
import React from "react";

const abilities = ["Product Design", "User Research", "UI Design", "Brand Design"];

export default function About() {
    return(
        <div className="red">
            <h1 className="text-7xl">
                Hola! I’m Nico. <br />
                I transform your ideas into exceptional digital products.
            </h1>
            <ul className="flex flex-wrap gap-2">
                {abilities.map((ab) =>  
                    <li className="p-1 border rounded-full px-3">{ab}</li>
                )}
                
            </ul>

        </div>
    )
}