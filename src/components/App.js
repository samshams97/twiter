import React from 'react';
import Layout from './Layout/Layout';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Pages404 from './pages/404/Pages404';
import Home from './pages/home/Home';
import TwitHashtags from './pages/twitHashTags/TwitHashtags';
import TwitsByUser from './pages/twitsByUser/TwitsByUser';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Route
          path={'/'}
          render={() => {
            return (
              <Layout>
                <Switch>
                  <Route exact path={'/'} component={Home} />
                  <Route
                    exact
                    path={'/hashtags/:hashtag'}
                    component={TwitHashtags}
                  />
                  <Route exact path={'/users/:user'} component={TwitsByUser} />

                  <Route component={Pages404} />
                </Switch>
              </Layout>
            );
          }}
        ></Route>
      </BrowserRouter>
    </div>
  );
}
