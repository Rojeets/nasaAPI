import Result from "../home.component";
import ChoseDate from "../chose_date.component";
import { useState } from "react";
import space from "../spaceapi";

export default function APOD() {
    const params = new URLSearchParams(window.location.search);
    const date = params.get("date");
    const data = space(date);
    if(date){
        console.log(data);
    }

    
    return (
        <>
            <ChoseDate />
        </>
    )


}