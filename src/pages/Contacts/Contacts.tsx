import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ContactsView } from "../../components/ContactsView/ContactsView";

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
