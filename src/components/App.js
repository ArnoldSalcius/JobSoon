import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './themes/mainTheme';
import {
    Container
} from '@material-ui/core';
import Navbar from './Navbar/Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Jobs from './Jobs/Jobs';
import Home from './Home/Home'




const App = () => {



    return (
        <div>
            <Router>
                <ThemeProvider theme={theme}>
                    <Navbar />
                    <Container maxWidth='xl' >
                        <Switch>
                            <Route path='/jobs'>
                                <Jobs />
                            </Route>
                            <Route >
                                <Home theme={theme} />
                            </Route>
                        </Switch>
                    </Container>

                </ThemeProvider>
            </Router>
        </div>
    )
}

export default App
