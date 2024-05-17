"use client"

import { useState } from "react";

interface ButtonProps {
    title?: string;
    icon? :() => JSX.Element,
    additionalClassName?: string;
    disabled?: boolean,
    loading?: boolean,
    onClick?: () => void,
    
}

export default function Button({ title, icon, additionalClassName, disabled, loading, onClick }: ButtonProps) {

    return (
        <button className={`${additionalClassName} ${loading? "loading": ""}`} onClick={onClick? onClick : ()=>{}} disabled={disabled}>
            {
                loading? 
                    <figure className={`${additionalClassName}__loader btn-loader`}>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.4814 10C20.0439 10 20.5054 9.54274 20.4482 8.98307C20.2543 7.08582 19.5207 5.27576 18.3242 3.77251C16.9154 2.00253 14.9482 0.762511 12.7437 0.254953C10.5392 -0.252605 8.22771 0.00229356 6.18678 0.978021C4.14585 1.95375 2.49605 3.59265 1.50681 5.62706C0.517577 7.66148 0.247361 9.9712 0.740294 12.179C1.23323 14.3868 2.46018 16.3623 4.22078 17.7828C5.98138 19.2032 8.17158 19.9848 10.4337 19.9998C12.3549 20.0125 14.2316 19.4717 15.8436 18.4526C16.3192 18.1519 16.3938 17.5066 16.0464 17.0641C15.699 16.6216 15.0613 16.551 14.5781 16.8391C13.3351 17.5804 11.9073 17.9722 10.4472 17.9625C8.64595 17.9506 6.90195 17.3283 5.50004 16.1972C4.09813 15.0661 3.12114 13.4931 2.72864 11.7351C2.33613 9.97707 2.55129 8.13791 3.33899 6.51796C4.12669 4.89801 5.44038 3.59301 7.06551 2.81607C8.69064 2.03912 10.5312 1.83615 12.2866 2.24031C14.0419 2.64446 15.6084 3.63185 16.7302 5.04123C17.6395 6.18366 18.213 7.54863 18.3976 8.9841C18.4694 9.54209 18.9188 10 19.4814 10Z" stroke="#00223C" strokeWidth="1" mask=""/>
                        </svg>
                    </figure>
                    : null
            }
            {icon? <figure>{icon()}</figure> : null}
            <span>
                {title}
            </span>
        </button>
    );
}

