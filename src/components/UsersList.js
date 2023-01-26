import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser, removeUser } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import { useThunk } from "../hooks/use-thunk";
import { GoTrashcan } from "react-icons/go";

function UsersList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);
  const [doDeleteUser, isDeletingUser, deletingUserError] =
    useThunk(removeUser);

  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    doCreateUser();
  };

  const handleUserRemove = (user) => {
    doDeleteUser(user);
  };

  const renderedUsers = data.map((user) => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          <Button
            loading={isDeletingUser}
            onClick={() => handleUserRemove(user)}
          >
            <GoTrashcan />
          </Button>
          {deletingUserError && <div>Error Deleting User!</div>}
          {user.name}
        </div>
      </div>
    );
  });

  let content;
  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (loadingUsersError) {
    content = <div>Error fetching data...</div>;
  } else {
    content = renderedUsers;
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={isCreatingUser} onClick={handleUserAdd}>
          + Add User
        </Button>
        {creatingUserError && "Error Creating User..."}
      </div>
      {content}
    </div>
  );
}

export default UsersList;
