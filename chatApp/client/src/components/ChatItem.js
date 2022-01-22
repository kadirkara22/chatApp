import React from 'react'
import styles from "./styles.module.css"
const ChatItem = ({ item }) => {
    console.log(item)

    return (
        <div className={`${styles.chatItem} ${item.fromMe ? styles.right : ""}`}>
            {item.message}
        </div>
    )
}

export default ChatItem
