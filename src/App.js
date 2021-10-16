import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppNavigator from "./components/AppNavigator";
import Pokedex from "./containers/Pokedex";
import PokemonDetails from "./containers/PokemonDetails";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import  Favorites  from "./containers/Favorites";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <AppNavigator />
          <Route exact path="/" component={Pokedex} />
          <Route exact path="/pokemon/:id" component={PokemonDetails} />
          <Route exact path="/favorites" component={Favorites} />
          </Router>
      </PersistGate>
    </Provider>
  );
}
