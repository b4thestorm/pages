import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App () {
  <Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/example" component={ExampleComponent} />
  <Route
    exact
    path="/example/two-deep"
    component={ExampleTwoDeepComponent}
  />
  <Route
    exact
    path="/sitemap-link-generator"
    component={SitemapLinkGenerator}
  />
  <Route component={PageNotFound} />
</Switch>
}

export default Hello;