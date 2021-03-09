import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ContactsView } from "../../components/ContactsView/ContactsView";
import { fetchContacts } from "../../redux/contacts/action";
import { SettingPanel } from "../../components/SettingPanel/SettingPanel";
import { Pagination } from "../../components/Pagination/Pagination";


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
            <SettingPanel />
          </Header>
          <MainWrapper>
            <ContactsView />
            <Pagination />
          </MainWrapper>
        </Container>
      );
};

export { Contacts };
