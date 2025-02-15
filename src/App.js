import React, { useEffect } from "react"
import './scss/main.scss'
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import {Route, useLocation, Switch} from 'react-router-dom'

import Navigation from './components/global/navigation/index'
import Footer from './components/global/footer/index'

import CreateAccount from './components/create-account/index'
import EmailVerification from './components/create-account/email-verification/index'
import CompleteAccount from './components/create-account/complete-account/index'
import LoginPage from './components/login-page/index'

import ImageUpload from './components/edit-tool/ImageUpload'

import LandingPage from './components/landing-page/index'

import AboutMe from './components/about-me/index'

import CreateCaseStudy from './components/create-case-study/CreateCaseStudy'
import CaseStudy from './components/case-study/index'

import AboutMeEdit from "./components/about-me/AboutMeEdit";

const theme = createTheme({
  typography: {
    fontFamily: ['Lato', 'Arial'].join(',')
  }
});

function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ThemeProvider theme={theme}>

        <Navigation />

        <Switch>
          <Route exact path='/create-account' component={CreateAccount} />
          <Route exact path='/email-verification' component={EmailVerification} />
          <Route exact path='/complete-account' component={CompleteAccount} />
          <Route exact path='/login-page' component={LoginPage} />
          <Route exact path='/edit-tool' component={ImageUpload} />
          <Route exact path='/create-case-study' component={CreateCaseStudy} />
          <Route exact path='/:user/case-studies' component={CaseStudy} />
          <Route exact path='/:user/:title-:id(\d*\w*)' component={CaseStudy} />
          <Route exact path='/about-me-edit' component={AboutMeEdit} />
          <Route exact path='/'>
            <LandingPage signedIn={false} /> 
          </Route>
          <Route exact path='/home'>
            <LandingPage signedIn={true} />
          </Route>
          <Route exact path='/about-me'>
            < AboutMe signedIn={true}/>
          </Route>
        </Switch>

        <Footer />

    </ThemeProvider>
  );
}

export default App;
