import { useContext, useEffect } from "react";
import "./App.css";
import { AppContext, withProvider } from "./App.state";
import Dashboard from "./pages/Dashboard/Dashboard";
import { getCurrentLocation } from "./services/common.service";

const App = () => {
  const context = useContext(AppContext);
  if (!context) {
    return <></>;
  }

  const { dispatch } = context;
  const initiat = async () => {
    await getCurrentLocation(dispatch);
  };
  useEffect(() => {
    initiat();
  }, []);

  return <Dashboard />;
};

export default withProvider(App);
