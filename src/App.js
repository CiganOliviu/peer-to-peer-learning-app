import React, { Fragment  } from 'react'
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import { routesMapping } from "./helpers/routesMapping";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollTopButton from "./components/ScrollTopButton/ScrollTopButton";
import ErrorBoundary from "./components/BoundaryError/BoundaryError";
import HomePage from "./pages/HomePage/HomePage"
import Error404Page from "./pages/Error404Page/Error404Page";
import HomeworksPage from "./pages/HomeworksPage/HomeworksPage";
import LoginSysPage from "./pages/LoginSysPage/LoginSysPage";
import SchedulePage from "./pages/SchedulePage/SchedulePage";
import TeachersDetailPage from "./pages/TeachersDetailPage/TeachersDetailPage";
import UserPage from "./pages/UserPage/UserPage";
import Feedback from "./pages/Feedback/Feedback";
import OurTeamPage from "./pages/OurTeamPage/OurTeamPage";
import StaffDetailPage from "./pages/StaffDetailPage/StaffDetailPage";
import OurTeachersPage from "./pages/OurTeachersPage/OurTeachersPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import './App.css';

function App() {
    return (
        <div className="App">
           <ErrorBoundary>
               <BrowserRouter>
                   <Router>
                       <Fragment>
                           <ScrollToTop />
                           <Switch>
                               <Route path={ routesMapping.HomeRoute } exact>
                                   <Header />
                                   <ScrollTopButton />
                                   <HomePage />
                                   <Footer />
                               </Route>
                               <Route path={ routesMapping.OurTeamRoute } exact>
                                   <Header />
                                   <OurTeamPage />
                                   <Footer />
                               </Route>
                               <Route path={ routesMapping.OurTeachersRoute } exact>
                                   <Header />
                                   <OurTeachersPage />
                                   <Footer />
                               </Route>
                               <Route path={ routesMapping.HomeworksRoute } exact>
                                   <Header />
                                   <HomeworksPage />
                                   <Footer />
                               </Route>
                               <Route path={ routesMapping.LoginRoute } exact>
                                   <LoginSysPage />
                               </Route>
                               <Router path={ routesMapping.FeedbackRoute } exact>
                                   <Feedback />
                               </Router>
                               <Route path={ routesMapping.ScheduleRoute } exact>
                                   <Header />
                                   <SchedulePage />
                                   <Footer />
                               </Route>
                               <Route path={ routesMapping.TeacherDetailsRoute } exact>
                                   <Header />
                                   <TeachersDetailPage />
                                   <Footer />
                               </Route>
                               <Route path={ routesMapping.StaffDetailsRoute } exact>
                                   <Header />
                                   <StaffDetailPage />
                                   <Footer />
                               </Route>
                               <Route path={ routesMapping.UserDetailsRoute } exact>
                                   <Header />
                                   <UserPage />
                                   <Footer />
                               </Route>
                               <Route path={ routesMapping.ContactRoute } exact>
                                   <Header />
                                   <ContactPage />
                                   <Footer />
                               </Route>
                               <Route exact>
                                   <Error404Page />
                               </Route>
                           </Switch>
                       </Fragment>
                   </Router>
               </BrowserRouter>
           </ErrorBoundary>
        </div>
    );
}

export default App;
