import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { Alert, Button } from "@material-tailwind/react";

function Message({type,msg}){

    const [open, setOpen] = useState(true);
    
    return(
        <>
            <Alert open={open} onClose={() => setOpen(false)} animate={{ mount: { y: 0 }, unmount: { y: 100 },}} icon={<FaCircleCheck color={`${type == 0 ? '#2ec946' : '#e64459'}`}/>} className={`flex-direction-row align-items-center rounded-none border-l-4 ${type == 0 ? 'border-[#2ec946]' : 'border-[#e64459]'} bg-[#2ec946]/10 font-medium ${type == 0 ? 'text-[#2ec946]' : 'text-[#e64459]'}`}>
                <p color={`${type == 0 ? '#2ec946' : '#e64459'}`}>{msg}</p>
            </Alert>
        </>
    )
}

export default Message;