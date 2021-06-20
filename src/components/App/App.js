import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from '../About/About';
import Todo from '../Todo/Todo';
import Contacts from '../Contacts/Contacts';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import styles from './App.module.css';

  const App = () => (
    <Router>
      <div className={styles.wrap}>
        <Paper className={styles.sidebar}>
          <MenuList>
            <Link to='/' className={styles.link}><MenuItem>Обо мне</MenuItem></Link>
            <Link to='/todo' className={styles.link}><MenuItem>Дела</MenuItem></Link>
            <Link to='/contacts' className={styles.link}><MenuItem>Контакты</MenuItem></Link>
          </MenuList>
        </Paper>
        <Paper>
          <Route path='/' exact component={About} />
          <Route path='/todo' component={Todo} />
          <Route path='/contacts' component={Contacts} />
        </Paper>
      </div>
    </Router>
  );

  export default App;