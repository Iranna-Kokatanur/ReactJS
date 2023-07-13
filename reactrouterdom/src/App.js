import './App.css';
import Book from './components/Book';
import { BooksLayout } from './components/BooksLayout';
import Component from './components/Component';

/**
 *
 *  npm install react-router-dom
 *  https://blog.webdevsimplified.com/2022-07/react-router/
 */

import {
  Route,
  Routes,
  BrowserRouter as Router,
  NavLink,
  useParams,
} from 'react-router-dom';

export default function App() {
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? 'none' : 'underline',
      color: isActive ? 'darkBlue' : 'black',
      fontSize: isActive ? '30px' : '25px',
    };
  };
  return (
    <Router>
      <div className='router'>
        <div>
          <NavLink to='/' style={navLinkStyles}>
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to='/helloworld' style={navLinkStyles}>
            Helloworld
          </NavLink>
        </div>
        <div>
          <NavLink to='/custom' style={navLinkStyles}>
            Custom
          </NavLink>
        </div>
        <div>
          <NavLink to='/books' style={navLinkStyles}>
            Books
          </NavLink>
        </div>
      </div>

      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/helloworld' element={<h1>Helloworld</h1>} />
        <Route path='/custom' element={<Component />} />
        <Route path='*' element={<h1>404 Page</h1>} />
        <Route path='/lib/:id' element={<h1>Lib page</h1>} />
        <Route path='/books' element={<BooksLayout />}>
          {/* <Route index element={<BooksLayout />} /> */}
          <Route path=':id' element={<Book />} />
          <Route path='new' element={<h1>This is book new page</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}
