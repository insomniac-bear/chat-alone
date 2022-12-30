import { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import type { FC, ChangeEvent } from "react";

export const Entrees: FC = () => {
  const [validated, setValidated] = useState(false);
  const [notion, setNotion] = useState('Мы не передаем ваше имя никаким третьим лицам и/или сервисам');
  const [name, setName] = useState('');

  const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    const regEx = /[a-zA-ZА-Яа-я]/g;


    if (evt.target.value !== '' && !regEx.test(evt.target.value)) {
      setValidated(false);
      setNotion('Имя может состоять только из букв русского или латинского алфавита');
      return;
    }
    if (notion === 'Имя может состоять только из букв русского или латинского алфавита') {
      setNotion('Мы не передаем ваше имя никаким третьим лицам и/или сервисам');
    }

    setName(evt.target.value);
    setValidated(true);
  };

  const onFormSubmit = (evt: ChangeEvent<HTMLFormElement>) => {
    const form = evt.currentTarget;
    if (form.checkValidity() === false) {
      evt.preventDefault();
      evt.stopPropagation();
    }

    setValidated(true);
    sessionStorage.setItem('name', name);
  };

  return (
    <Card style={{ width: '32rem' }}>
      <Card.Body>
        <Form noValidate validated={validated} onSubmit={onFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Представьтесь</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите ваше имя"
              value={name}
              onChange={onInputChange}
              required={true}
              minLength={1}
              maxLength={30}
            />
            <Form.Text className="text-muted">
              {notion}
            </Form.Text>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            disabled={!validated}
          >
            Войти в чат
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
