import React from 'react';
import GlobalStyles from './globalStyles';
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
            <Sidebar />
            <Header />
            <Hero />
            <Work />
            <Story />
            <About />
            <Contact />
            <Footer />
        </>
    );
}

export default App;