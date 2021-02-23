import { Switch, Route } from 'react-router-dom';
// import LoginPage from '../pages/LoginPage';
// import NewPostPage from '../pages/NewPostPage';
// import ViewCityPage from '../pages/ViewCityPage';
import LandingPage from '../pages/LandingPage';

const routes = (
    <Switch>
        <Route exact path='/' component={LandingPage} />
        {/* <Route path='/login' component={LoginPage} />
        <Route path='/new-post' component={NewPostPage} />
        <Route path='/cities/:id' component={ViewCityPage} /> */}
    </Switch>
)

export default routes;