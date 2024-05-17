"use client"
import { useState, useEffect, useRef } from "react";
import InputMask from 'react-input-mask';

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
export default function InputPhone(
    {
        label, 
        additionalClassName, 
        placeholder, 
        disabled, 
        defaultValue, 
        maxLength, 
        register, 
        errors, 
        viewError
    }: InputDefaultProps){
    const [length, setLength] = useState<number>(0);
    const refLength = useRef<HTMLInputElement>(null);

    function changeInputDefault(){
        refLength.current && setLength(refLength.current.value.length);
    }

    useEffect(() => {
        refLength.current && setLength(refLength.current.value.length);
    },[]);

    return(
        <label className={`input-phone ${additionalClassName ? additionalClassName : ""} ${defaultValue !== "" ? "filled": ""} ${errors ? "error": ""}`}>
            {label && <span className="input-phone__label">{label}</span>}
            <InputMask mask="+7(999) 999-99-99" type="text" placeholder={placeholder} disabled={disabled} defaultValue={defaultValue} ref={refLength} maxLength={maxLength} onChange={changeInputDefault} {...register}/>
            {maxLength && <span className="input-phone__length">{length} / {maxLength}</span>}
            {errors && viewError && <span className="input-phone__error">{errors.message}</span>}
        </label>
    );
}