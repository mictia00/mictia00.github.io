import Router, { Route } from 'preact-router';
import { Home } from '@/routes/Home';


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

export default App;