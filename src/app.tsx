import Router, { Route } from 'preact-router';
import { Navbar } from '@/components/Navbar';
import { Footer } from './components/Footer';
import { Home } from '@/routes/Home';
import { NotFound404 } from '@/routes/404';

import injectContext from '@/store/appContext';


function App() {
    return (
        <>
            <Navbar />
            <Router>
                <Route component={Home} path='/' />
                <Route component={NotFound404} default />
            </Router>
            <Footer />
        </>
    );
}

export default injectContext(App);