import React, { useEffect } from 'react'
import { useChat } from '../context/ChatContext'
import { init, subscribeChat, subscribeInitialMessages } from '../socketApi'
import ChatForm from './ChatForm'
import ChatLİst from './ChatList'


const Container = () => {
    const { setMessages } = useChat();
    useEffect(() => {
        init()
        // subscribeInitialMessages((messages) => setMessages(messages))
        subscribeChat((message) => {
            setMessages((prev) => [...prev, { message }])
        })
    }, [])

    return (
        <div>
            <ChatLİst />
            <ChatForm />
        </div>
    )
}

export default Container
