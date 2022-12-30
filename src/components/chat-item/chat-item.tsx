import type { FC } from 'react';
import styles from './chat-item.module.css';
import { IMessage } from '../chat-list/chat-list.types';

export const ChatItem: FC<IMessage> = ({ author, message, date }) => {
  const messageDate = new Date(date);

  return (
    <li className={author === sessionStorage.getItem('name') ? styles.selfMessage : styles.message}>
      <p className={styles.author}>From: {author}</p>
      <p className={styles.text}>{message}</p>
      <p className={styles.date}>{`${messageDate.getDate()}-${messageDate.getMonth()}-${messageDate.getFullYear()} ${messageDate.getHours()}:${messageDate.getMinutes()}:${messageDate.getSeconds()}`}</p>
    </li>
  );
};
