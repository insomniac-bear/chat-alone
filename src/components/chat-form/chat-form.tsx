import { ChangeEvent, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import type { FC } from 'react';
import { nanoid } from 'nanoid';

export const ChatForm: FC = () => {
  const [ userInput, setUserInput ] = useState('');

  const inputHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setUserInput(evt.target.value);
  };

  const formHandler = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const message = {
      id: nanoid(),
      author: sessionStorage.getItem('name'),
      message: userInput,
      date: new Date(),
    };

    const data = localStorage.getItem('chat');

    if (data) {
      const messages = JSON.parse(data);
      messages.push(message);

      localStorage.setItem('chat', JSON.stringify(messages));
    } else {
      localStorage.setItem('chat', JSON.stringify([message]));
    }
    setUserInput('');
  };

  return(
    <Form onSubmit={formHandler}>
      <Row>
        <Col xs={10}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Введите сообщение"
              value={userInput}
              onChange={inputHandler}
            />
          </Form.Group>
        </Col>

        <Col>
          <Button
            variant="primary"
            type="submit"
            disabled={!userInput}
          >
            Отправить
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
