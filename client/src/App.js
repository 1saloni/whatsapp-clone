

import { GoogleOAuthProvider } from '@react-oauth/google';
//components
import Messenger from "./Components/Messenger";
import AccountProvider from './context/AccountProvider';

function App() {

  const clientId = '776398447316-sg2jv2cnr7t7hdmkor08hlmj9en1kacs.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
      <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
