import { MdEmail } from "react-icons/md";
import { Button, Card, Input, Typography, Spinner } from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
import sender from '@emailjs/browser';
import {isEmail,isNotEmpty,isOk} from '../utilities/validators'
import Message from "./Message";

function Form(){

    const [isActiveSpinner, setIsActiveSpinner] = useState(false);
    const [isNotError, setIsNotError] = useState(false)

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    useEffect(()=>{
        if(isNotError)
        {
            setIsActiveSpinner(true)
            const body = {email,message}
            sender.send('service_zq7ojr5', 'template_4u6361e', body, '0vY4lmFqROkhSYR2x')
            .then(
                res => 
                {
                    setIsActiveSpinner(false)
                    setEmail('')
                    setMessage('')
                },
                err => 
                {
                    setIsActiveSpinner(false)
                }
            )
        }
    },[isNotError])

    return(
        <div className="width-form" style={{padding:'1.5rem',backgroundColor:'var(--background-color-white)',borderRadius:'1rem'}}>
            <Card color="transparent" shadow={false}>
            <Typography variant="h4" className="txt-size-large" style={{color:'var(--background-color-semiblack)'}}>Send a Message</Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3 txt-size-medium">Email</Typography>
                    <Input value={email} onChange={e => setEmail(e.target.value)}  placeholder="your email to keep in contact after" className=" !border-t-blue-gray-200 padding-input width-input focus:!border-t-gray-900 txt-size-small" labelProps={{ className: "before:content-none after:content-none",}}/>
                    <Typography variant="h6" color="blue-gray" className="-mb-3 txt-size-medium">Message</Typography>
                    <Input value={message} onChange={e => setMessage(e.target.value)} placeholder="type message" className=" !border-t-blue-gray-200 padding-input width-input focus:!border-t-gray-900 txt-size-small" labelProps={{ className: "before:content-none after:content-none",}}/>
                    <Button onClick={e => setIsNotError(isOk([isEmail(email),isNotEmpty(email),isNotEmpty(message)]))} className="mt-6 txt-size-medium" style={{display:'flex',alignItems:'center',justifyContent:'center',width:'fit-content',margin:'auto'}}>{isActiveSpinner ? <Spinner width={'20px'} style={{fontSize:'1rem',marginLeft:'0.5rem'}}/> : <> Send <MdEmail style={{fontSize:'1rem',marginLeft:'0.5rem'}}/></>}</Button>
                </div>
            </form>
            </Card>
        </div>
    )
}

export default Form;