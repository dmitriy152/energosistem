"use client"
import { useState, useEffect, useRef } from "react"

interface InputDefaultProps {
    label?:string,
    additionalClassName?: string,
    placeholder? :string,
    disabled? :boolean,
    defaultValue? :string,
    maxLength? :number,
    register? :any,
    errors? :any,
    viewError?: boolean,
}
export default function InputDefault ({label,additionalClassName, placeholder, disabled, defaultValue, maxLength, register, errors, viewError,}: InputDefaultProps){
    const [length, setLength] = useState<number>(0)
    const refLength = useRef<HTMLInputElement>(null)
    function changeInputDefault(){
        refLength.current ? setLength(refLength.current.value.length) : null
    }
    useEffect(() => {
        refLength.current ? setLength(refLength.current.value.length) : null
    },[])
    return(
        <label htmlFor="" className={`input-def ${additionalClassName ? additionalClassName : ""} ${defaultValue != "" ? "filled": ""} ${errors? "error": ""}`}>
            {label? <span className="input-def__label">{label}</span> : null}
            <input type="text" placeholder={placeholder} disabled={disabled} defaultValue={defaultValue} ref={refLength} maxLength={maxLength} onChange={changeInputDefault} {...register}/>
            {maxLength ? <span className="input-def__length">{length} / {maxLength}</span> : null}
            {errors && viewError? <span className="input-def__error">{errors.message}</span> : null}
        </label>
    )
}