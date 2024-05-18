"use client"
import axios from "axios"
import Image from "next/image"
import InputDefault from "../UI-Kit/InputDefault/InputDefault"
import InputPhone from "../UI-Kit/InputPhone/InputPhone"
import TextareaDefault from "../UI-Kit/TextareaDefault/TextareaDefault"
import Button from "../UI-Kit/Button/Button"
import { useForm, SubmitHandler } from "react-hook-form"
import { useRef, useEffect } from "react";

export default function Form() {

    type Inputs = {
        firstName: string
        comments: string
        phone: string
        errors: any
    }
    async function sendMail(firstName:string, phone:string,comments:string){
        const data = await axios("/api/mail",{
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            data: {
                firstName: firstName,
                phone: phone,
                comments: comments,
            },
        })
        console.log(data)
    }
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
      } = useForm<Inputs>({
        mode: "all",
        
    })
    
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        reset()
        sendMail(data.firstName,data.phone,data.comments)
    };
    return(
        <section className="form">
            <div className="form__wrapper wrapper">
                <Image
                    className="form__img"
                    src="/static/img/form__img.png"
                    alt="form__img"
                    width={500}
                    height={400}
                />
                <form className="form__inputs" onSubmit={handleSubmit(onSubmit)}>
                    <InputDefault
                        additionalClassName="form__inputs__name" 
                        label="Имя" 
                        placeholder="Введите имя"
                        register={register("firstName", {
                            required: true
                        })}
                        errors={errors.firstName}
                    />
                    <InputPhone 
                        additionalClassName="form__inputs__phone" 
                        label="Телефон" 
                        placeholder="Введите телефон"
                        register={register("phone", {
                            required: true,
                            pattern: {
                                value: /^\+\d{1}\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/, 
                                message: "Неправильный формат телефона"
                            }
                        })}
                        errors={errors.phone}
                    />
                    <TextareaDefault 
                        additionalClassName="form__inputs__comments" 
                        label="Ваш вопрос"
                        placeholder="Введите ваш вопрос"
                        register={register("comments", {
                            required: false,
                        })}
                        errors={errors.phone}
                    />
                    <Button additionalClassName="btn-blue" title="Отправить"/>
                </form>
            </div>
        </section>
    )
}