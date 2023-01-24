import UsersList from "./components/UsersList";
import Button from "./components/Button";
import { useDispatch } from "react-redux";
import { addUser } from "./store";

function App() {
  const dispatch = useDispatch();

  const handleAddUser = () => {
    dispatch(addUser());
  };

  return (
    <div className="container mx-auto">
      <Button className="primary" onClick={handleAddUser}>
        + Add User
      </Button>
      <UsersList />
    </div>
  );
}

export default App;
