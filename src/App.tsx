import './App.css';
import './index.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/professional/home/Home';
import { Contact } from './pages/professional/contact/Contact';
import { Projects } from './pages/professional/projects/Projects';
import { About } from './pages/professional/about/About';
import { Collaborate } from './pages/creator/collaborate/Collaborate';
import { AppBar, Button, Toolbar } from '@mui/material';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
  <ThemeProvider theme={darkTheme}>
     <CssBaseline />
     <AppBar position="static" style={{ backgroundColor: "#000" }}>
              <Toolbar style={{ justifyContent: "center" }}>
                  <Button color="inherit" component={Link} to="/">Home</Button>
                  <Button color="inherit" component={Link} to="/professional/about">About</Button>
                  <Button color="inherit" component={Link} to="/professional/projects">Projects</Button>
                  <Button color="inherit" component={Link} to="/professional/contact">Contact</Button>
              </Toolbar>
          </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/professional" element={<div>hello</div>} />
        <Route path="/professional/about" element={<About />} />
        <Route path="/professional/projects" element={<Projects />} />
        <Route path="/professional/contact" element={<Contact />} />

        <Route path="/creator" element={<div>Creator</div>} />
        <Route path="/creator/collaborate" element={<Collaborate />} />
        <Route path="/creator/pottery" element={<div>Creator</div>} /> 
        <Route path="/creator/products" element={<div>Creator</div>} />
      </Routes>
  </ThemeProvider>
  );
}

export default App;
