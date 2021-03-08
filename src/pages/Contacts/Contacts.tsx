import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ContactsView } from "../../components/ContactsView/ContactsView";
import { fetchContacts } from "../../redux/contacts/action";

import { Container, Header, MainWrapper, Title } from "./ContactsStyle";

const Contacts: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
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
