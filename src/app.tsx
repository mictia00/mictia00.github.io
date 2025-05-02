import Router, { Route } from 'preact-router';
import { Home } from '@/routes/Home';

import injectContext from '@/store/appContext';


function App() {
    return (
        <>
            {/* NavBar */}
            <Router>
                <Route component={Home} path='/' />
            </Router>
            <footer>Sitio NO oficial</footer>
        </>
    );
}

export default injectContext(App);