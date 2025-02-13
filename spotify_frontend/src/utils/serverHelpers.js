import {backendUrl} from "./config";
export const makeunauthenticatedPOSTRequest =async (route ,body)=>{
    const response = await fetch(backendUrl + route,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(body),
    });
    const formattedResponse = await Response.json();
    return formattedResponse;
};
