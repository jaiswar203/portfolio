import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Sidebar from "./components/Home/sidebar";
import DotLoader from "react-spinners/DotLoader";

const App = () => {
  const [loader, setloader] = useState(false);

  useEffect(() => {
    setloader(true);
    setTimeout(() => {
      setloader(false);
    }, [3000]);
  }, []);
  return (
    <Router>
      {loader ? (
          <div className='loader'>
        <DotLoader color={'#350DD3'} loading={loader} size={150} />
          </div>
      ) : (
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <Sidebar />
        </>
      )}
    </Router>
  );
};

export default App;
