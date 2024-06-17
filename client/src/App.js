// css file
import './App.css';

// Parent router
import AppNavigator from './navigator/AppNavigator';

// google oauth provider
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
   let clientId = '846686358798-b7q83lmfjv2gtqljbbe35pbdcn9ake90.apps.googleusercontent.com'

  return (
    <div className="App">
      <GoogleOAuthProvider clientId={clientId}>
        <AppNavigator auth={true} /> 
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
