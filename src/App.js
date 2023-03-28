import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import PerformerProfile from './components/PerformerProfile';
import Performers from './components/Performers';
import PostForm from './components/PostForm';
import UserPostList from './components/UserPostList';
import PrivateRoute from './utils/PrivateRoute';
import { checkLoggedIn } from './actions/auth';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(checkLoggedIn());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
  {/** 
            <PrivateRoute path="/profile" component={PerformerProfile} />
            <PrivateRoute path="/performers/:id/posts" component={UserPostList} />
            <PrivateRoute path="/performers/:id" component={PerformerProfile} />
            <PrivateRoute path="/performers" component={Performers} />
            <PrivateRoute path="/posts/new" component={PostForm} />
  **/}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
