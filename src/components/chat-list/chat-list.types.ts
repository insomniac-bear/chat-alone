export interface IMessage {
  id: number;
  author: string;
  message: string;
  date: Date;
};

export type TMessageList = IMessage[] | undefined;
