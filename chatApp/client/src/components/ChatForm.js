import React, { useState } from 'react'
import { useChat } from '../context/ChatContext';
import { sendMessage } from '../socketApi';
import styles from "./styles.module.css"
const ChatForm = () => {
    const [message, setMessage] = useState("");
    const { setMessages } = useChat();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(message)
        setMessages((prev) => [...prev, { message, fromMe: true }])


        sendMessage(message)
        setMessage("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className={styles.textInput} value={message} onChange={(e) => setMessage(e.target.value)} />
            </form>
        </div>
    )
}

export default ChatForm
