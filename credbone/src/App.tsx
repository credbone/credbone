import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Template from "./template";
import About from "./pages/about";

import { ThemeProvider } from "./components/ThemeProvider";
import Settings from "./pages/settings";
import { Navigation } from "./components/navigation";

import VerticalNav from "./template/verticalNav";
import SnackbarContainer from "./components/snackbar/SnackbarContainer";

function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
                      <group
              data-adaptive="mobile"
              data-adaptive-order="2"
              data-index="3"
              data-border="overprint"
              data-background="main-background"
            >
              <group data-wrap="no" data-gap="5" data-space="10">
                <Navigation />
              </group>
            </group>
          <SnackbarContainer>

            <view data-vertical="">
              <VerticalNav data-adaptive="desktop" />
              <Routes>
                <Route path="/*" element={<Navigate replace to="/home" />} />
                <Route path="/Home/*" element={<Template />} />
                <Route path="/About" element={<About />} />
                <Route path="/Settings" element={<Settings />} />
              </Routes>
            </view>
            <div id="popover-container" data-max-length="fit"></div>
          </SnackbarContainer>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
