// css file
import './App.css';

// router
import AppNavigater from './navigater/AppNavigater';

// google outh provider
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
   let clientId = '846686358798-b7q83lmfjv2gtqljbbe35pbdcn9ake90.apps.googleusercontent.com'

  return (
    <div className="App">
      <GoogleOAuthProvider clientId={clientId}>
        <AppNavigater/>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
