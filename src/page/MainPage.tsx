import styled from '@emotion/styled';
import React from 'react';

import Body from '@/components/Body';
import Footer from '@/components/Footer';
import { Header } from '@/components/Header';

const MainPage: React.FC = () => {
  return (
    <PageContainer>
      <Header />
      <Body />
      <Footer />
    </PageContainer>
  );
};

export default MainPage;

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1024px;
    background: rgb(250, 250, 250);
`;