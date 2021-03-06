import React, { useEffect } from "react";
import { Container, Header, MainWrapper, Title } from "./ContactsStyle";

const Contacts: React.FC = () => {

    return (
        <Container>
          <Header>
            <Title>Contacts</Title>
          </Header>
          <MainWrapper>
            <ContactsView />
          </MainWrapper>
        </Container>
      );
};

export { Contacts };
