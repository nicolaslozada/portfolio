
import React from "react";

const abilities = ["Product Design", "User Research", "UI Design", "Brand Design"];

export default function About() {
    return(
        <div className="grid grid-cols-12 my-20">
            <h1 className="col-span-8 mb-10 text-6xl">
                Hola! I’m Nico. <br />
                I transform your ideas into exceptional digital products.
            </h1>
            <ul className="flex flex-wrap gap-2 col-span-12">
                {abilities.map((ab) =>  
                    <li className="p-1 border rounded-full px-3 text-lg font-bold text-gray-500">{ab}</li>
                )}
                
            </ul>
        </div>
    )
}