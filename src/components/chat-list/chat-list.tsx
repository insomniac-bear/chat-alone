import { useEffect, useState } from 'react';
import type { FC } from 'react';
import { TMessageList } from './chat-list.types';
import { ChatItem } from '../chat-item/chat-item';
import styles from './chat-list.module.css';

export const ChatList: FC = () => {
  const [messages, setMessages] = useState<TMessageList>([]);

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      const data = localStorage.getItem('chat');
      if (data) {
        setMessages(JSON.parse(data));
      }
    }, 1000);
    return(() => clearInterval(refreshInterval));
  }, []);

  return (
    <ul className={styles.chat}>
      {
        messages ? messages.map((message) => {
          return (
            <ChatItem id={message.id} message={message.message} author={message.author} date={message.date} key={message.id} />
          );
        }) : <></>
      }
    </ul>
  );
};
