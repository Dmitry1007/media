import { GoTrashcan } from "react-icons/go";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import Button from "./Button";

function UsersListItem({ user }) {
  const [doDeleteUser, isDeletingUser, deletingUserError] =
    useThunk(removeUser);

  const handleUserRemove = () => {
    doDeleteUser(user);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex flex-row items-center justify-between">
          <Button
            className="mr-3"
            loading={isDeletingUser}
            onClick={handleUserRemove}
          >
            <GoTrashcan />
          </Button>
          {deletingUserError && <div>Error Deleting User!</div>}
          {user.name}
        </div>
      </div>
    </div>
  );
}

export default UsersListItem;
