import { useDispatch } from "react-redux";
import {Link , Route , Routes} from "react-router-dom";
import './App.css';
import ContactList from "./components/ContactList";
import EditAdd from "./components/EditAdd";
import Home from "./components/Home"
import { toggleFalse } from "./JS/action/editAction";


function App() {
  const dispatch = useDispatch();
  return (
    <div>
      <Link to="/">
      <button>Home</button>
      </Link>
      <Link to="/contact_list">
      <button>Contact List</button>
      </Link>
      <Link to="/add">
      <button onClick={()=>dispatch(toggleFalse())} >Add Contact</button>
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact_list" element={<ContactList />} />
        <Route path="/edit/:id" element={<EditAdd />} />
        <Route path="/add" element={<EditAdd />} />
      </Routes>
    </div>
  );
}

export default App;
