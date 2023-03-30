import React from 'react';
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/Home';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import PerformerProfile from './components/performerProfile/PerformerProfile';
import PerformerProfileAbout from './components/performerProfile/PerformerProfileAbout';
import PerformerProfilePosts from './components/performerProfile/PerformerProfilePostList';
import PerformerProfileAlbums from './components/performerProfile/PerformerProfileAlbumList';
import PerformerProfileVideos from './components/performerProfile/PerformerProfileVideoList';
import AccountSettings from './components/accountSettings/AccountSettings';
import AccountSettingsProfile from './components/accountSettings/AccountSettingsProfile';
import AccountSettingsWallet from './components/accountSettings/AccountSettingsWallet';
import PrivateRoute from './utils/PrivateRoute';
import { checkLoggedIn } from './actions/auth';
import AccountSettingsMembership from './components/accountSettings/AccountSettingsMembership';

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

          <Route path="/settings/" element={<AccountSettings />}>
            <Route path="*" element={<AccountSettingsProfile />} />
            <Route path="wallet" element={<AccountSettingsWallet />} />
            <Route path="membership" element={<AccountSettingsMembership />} />
          </Route>

          {/**
          <Route path="/performers/:id" element={<PrivateRoute element={<PerformerProfile />} />}>
            <Route path="*" element={<PerformerProfileAbout />} />
            <Route path="posts" element={<PerformerProfilePosts />} />
            <Route path="albums" element={<PerformerProfileAlbums />} />
            <Route path="videos" element={<PerformerProfileVideos />} />
          </Route>
          */}
          
          <Route path='*' element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
