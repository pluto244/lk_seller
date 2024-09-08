import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { ResponsiveAppBar } from '@/03_widgets/ResponsiveAppBar/ResponsiveAppBar';
import Footer from '@/03_widgets/Footer/Footer';

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    
    `;
    
    const ContentWrapper = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    `;
    
    
    
    const MainContent = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    max-width: 1536px;
`;

const Layout: React.FC = () => {
    return (
        <LayoutContainer>
            <ResponsiveAppBar />
            <ContentWrapper>
                <MainContent>
                    <Outlet />
                </MainContent>
            </ContentWrapper>
            <Footer />
        </LayoutContainer>
    );
};

export default Layout;
