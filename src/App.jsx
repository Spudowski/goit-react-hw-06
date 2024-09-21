import "./App.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store.js";
import SearchBox from "./components/SearchBox.jsx";
import ContactList from "./components/ContactList.jsx";
import ContactForm from "./components/ContactForm.jsx";
import { useState } from "react";

const App = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <h1>Contacts List</h1>
          <SearchBox isActive={isActive} />
          <ContactForm setIsActive={setIsActive} />
          <ContactList isActive={isActive} />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
