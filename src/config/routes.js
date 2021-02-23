import { Switch, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import NewPostPage from '../pages/NewPostPage';
import CityPage from '../pages/CityPage';
import LandingPage from '../pages/LandingPage';

const routes = (
    <Switch>
        <Route exact path='/' component={ LandingPage } />
        <Route path='/login' component={ LoginPage } />
        <Route path='/new-post' component={NewPostPage} />
        <Route path='/cities/' component={ CityPage } /> 
    </Switch>
)

/* 

*/

export default routes;