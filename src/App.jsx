import AppPage from "./components/AppPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Switch } from "wouter";
import Fallback from "./components/Fallback";
import { ErrorBoundary } from "react-error-boundary";

const Container = ({ children }) => (
  <div className="pt-20 mx-auto max-w-5xl px-2 selection:bg-indigo-100 min-h-screen">
    {children}
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-slate-50 antialiased">
      <Header />
      <ErrorBoundary FallbackComponent={Fallback}>
        <Container>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/app/:id">
              <AppPage
                name="Garena Free Fire: Free Shotting Game"
                company="gameevil"
                category="role playing"
                description="Free Fire is the ultimate survival shooter game available on mobile. Each 10-minute game places you on a remote island where you are pit against 49 other players, all seeking survival. Players freely choose their starting point with their parachute, and aim to stay in the safe zone for as long as possible. Drive vehicles to explore the vast map, hide in trenches, or become invisible by proning under grass. Ambush, snipe, survive, there is only one goal: to survive and answer the call of duty.
         "
              />
            </Route>
            <Route>
              <Fallback />
            </Route>
          </Switch>
        </Container>
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default App;
