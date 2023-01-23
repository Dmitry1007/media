import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store";

function UsersList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    // erroneous eslint package error, makes us add [dispatch] for it to go away
  }, [dispatch]);

  return "Users List";
}

export default UsersList;
