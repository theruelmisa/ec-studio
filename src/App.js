import React from 'react';
import GlobalStyles, { MainContainer } from './globalStyles';
import { 
    Header,
    Sidebar,
    Hero,
    Work,
    About,
    Story,
    Contact,
    Footer
} from './components';

const App = () => {
    return ( 
        <>
            <GlobalStyles />
            <Header />
            <MainContainer>
                <Sidebar />
                <Hero />
                <Work />
                <Story />
                <About />
                <Contact />
                <Footer />
            </MainContainer>
        </>
    );
}

export default App;