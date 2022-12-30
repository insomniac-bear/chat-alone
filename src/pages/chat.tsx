import type { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ChatForm } from '../components/chat-form/chat-form';
import { ChatList } from '../components/chat-list/chat-list';

export const Chat: FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <ChatList />
        </Col>
      </Row>
      <Row>
        <Col>
          <ChatForm />
        </Col>
      </Row>
    </Container>
  );
};
