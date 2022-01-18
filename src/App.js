import Messanger from "./components/Messenger.jsx";
import AccountProvider from "./components/context/AccountProvider.jsx";
import TramplateProvider from "./TramplateContext/TramplateProvider.jsx";
import UserProvider from "./components/context/UserProvider.jsx";

function App() {
  return (
    <TramplateProvider>
      <UserProvider>
        <AccountProvider>
          <Messanger />
        </AccountProvider>
      </UserProvider>
    </TramplateProvider>
  );
}

export default App;
