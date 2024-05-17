"use client"
import { useEffect, useRef, useState } from "react"

interface TextareaDefaultProps {
    label?:string,
    additionalClassName?: string,
    placeholder? :string,
    disabled? :boolean,
    defaultValue?: string,
    maxLength?: number,
    register? :any,
    errors? :any,
    viewError?: boolean,
}
export default function TextareaDefault ({label,additionalClassName, placeholder, disabled, defaultValue, maxLength,register,errors, viewError,}: TextareaDefaultProps){
    const [length, setLength] = useState<number>(0)
    const [error, setError] = useState<boolean>(false)
    const refLength = useRef<HTMLTextAreaElement>(null)
    function changeTextarea(){
        if(refLength.current){
           setLength(refLength.current.value.length)
           if(maxLength && refLength.current.value.length > maxLength){
               setError(true)
           }
           else{
               setError(false)
           }
       }
    }
    useEffect(() => {
        refLength.current ? setLength(refLength.current.value.length) : null
    })
    return(
        <label htmlFor="" className={`textarea-def ${additionalClassName ? additionalClassName : ""} ${defaultValue != "" ? "filled": ""} ${error? "error" : ""}`}>  
            {label? <span className="textarea-def__label">{label}</span> : null}
            <textarea placeholder={placeholder} disabled={disabled} defaultValue={defaultValue} maxLength={maxLength} ref={refLength} onChange={changeTextarea} {...register}/>
            {maxLength ? <span className="textarea-def__length">{length} / {maxLength}</span> : null}
            {errors && viewError? <span className="textarea-def__error">{errors.message}</span> : null}
        </label>
    )
}