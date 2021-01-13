import {
  BrowserRouter as Router,
  Route as BaseRoute,
  Redirect,
  Switch,
} from "react-router-dom";

import { auth } from "contexts";
import { Authenticating, Dashboard, SignIn } from "pages";

const Route = ({ render, ...props }: any) => {
  const { user, authenticating } = auth.useAuth();

  return (
    <BaseRoute
      {...props}
      render={({ location }) => {
        if (authenticating) {
          return <Authenticating />;
        }

        if (user) {
          return render();
        }

        return (
          <Redirect
            to={{
              pathname: "/sign-in",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

const PublicRoute = ({ render, ...props }: any) => {
  const { user, authenticating } = auth.useAuth();

  return (
    <BaseRoute
      {...props}
      render={({ location }) => {
        if (authenticating) {
          console.log(authenticating);
          return <Authenticating />;
        }

        if (!user) {
          return render();
        }

        return (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

function App() {
  return (
    <auth.AuthProvider>
      <Router>
        <Switch>
          <PublicRoute path="/sign-in" render={() => <SignIn />} />
          <Route path="/dashboard" render={() => <Dashboard />} />
          <Route
            exact
            path="/"
            render={() => {
              return (
                <Redirect
                  to={{
                    pathname: "/dashboard",
                  }}
                />
              );
            }}
          />
        </Switch>
      </Router>
    </auth.AuthProvider>
  );
}

export default App;
