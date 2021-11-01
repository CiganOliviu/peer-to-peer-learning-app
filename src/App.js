import React from 'react'
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollTopButton from "./components/ScrollTopButton/ScrollTopButton";
import ErrorBoundary from "./components/BoundaryError/BoundaryError";

import HomePage from "./pages/HomePage/HomePage"
import DocxPage from "./pages/DocxPage/DocxPage";
import Error404Page from "./pages/Error404Page/Error404Page";
import HomeworksPage from "./pages/HomeworksPage/HomeworksPage";
import LoginSysPage from "./pages/LoginSysPage/LoginSysPage";
import SchedulePage from "./pages/SchedulePage/SchedulePage";
import TeachersDetailPage from "./pages/TeachersDetailPage/TeachersDetailPage";
import UserPage from "./pages/UserPage/UserPage";
import Feedback from "./pages/Feedback/Feedback";

import './App.css';


function App() {
    return (
        <div className="App">
           <ErrorBoundary>
               <BrowserRouter>
                   <Router>
                       <Switch>
                           <Route path="/" exact>
                               <Header />
                               <ScrollTopButton />
                               <HomePage />
                               <Footer />
                           </Route>
                           <Route path="/docx" exact>
                               <Header />
                               <DocxPage />
                               <Footer />
                           </Route>
                           <Route path="/homeworks" exact>
                               <Header />
                               <HomeworksPage />
                               <Footer />
                           </Route>
                           <Route path="/login" exact>
                               <LoginSysPage />
                           </Route>
                           <Router path="/feedback" exact>
                               <Feedback />
                           </Router>
                           <Route path="/schedule" exact>
                               <Header />
                               <SchedulePage />
                               <Footer />
                           </Route>
                           <Route path="/teacher-detail/:id" exact>
                               <Header />
                               <TeachersDetailPage />
                               <Footer />
                           </Route>
                           <Route path="/user" exact>
                               <Header />
                               <UserPage />
                               <Footer />
                           </Route>
                           <Route exact>
                               <Error404Page />
                           </Route>
                       </Switch>
                   </Router>
               </BrowserRouter>
           </ErrorBoundary>
        </div>
    );
}

export default App;
