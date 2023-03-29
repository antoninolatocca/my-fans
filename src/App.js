import React from 'react';
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import PerformerProfile from './components/performerProfile/PerformerProfile';
import PerformerProfileAbout from './components/performerProfile/PerformerProfileAbout';
import PerformerProfilePosts from './components/performerProfile/PerformerProfilePostList';
import PerformerProfileAlbums from './components/performerProfile/PerformerProfileAlbumList';
import PerformerProfileVideos from './components/performerProfile/PerformerProfileVideoList';
import Performers from './components/Performers';
import PostForm from './components/PostForm';
import PrivateRoute from './utils/PrivateRoute';
import { checkLoggedIn } from './actions/auth';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(checkLoggedIn());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/performers/:id" element={<PerformerProfile />}>
            <Route path="*" element={<PerformerProfileAbout />} />
            <Route path="posts" element={<PerformerProfilePosts />} />
            <Route path="albums" element={<PerformerProfileAlbums />} />
            <Route path="videos" element={<PerformerProfileVideos />} />
          </Route>
          <Route path="/performers" element={<PrivateRoute element={<Performers />} />} />
          <Route path="/posts/new" element={<PrivateRoute element={<PostForm />} />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
