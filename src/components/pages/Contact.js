import React from 'react'

export default function Contact() {
    return (
        <>
            <form className="contact-form">
                <h1>Контакты</h1>
                <input placeholder="Имя" />
                <input placeholder="Email" />
                <input placeholder="Тема" />
                <textarea  placeholder="Текст" />
                <input type="submit" value="Отправить" />
            </form>
        </>
    )
}
