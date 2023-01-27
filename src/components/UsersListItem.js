import { GoTrashcan } from "react-icons/go";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";

function UsersListItem({ user }) {
  const [doDeleteUser, isDeletingUser, deletingUserError] =
    useThunk(removeUser);

  const handleUserRemove = () => {
    doDeleteUser(user);
  };

  const header = (
    <>
      <Button
        className="mr-3"
        loading={isDeletingUser}
        onClick={handleUserRemove}
      >
        <GoTrashcan />
      </Button>
      {deletingUserError && <div>Error Deleting User!</div>}
      {user.name}
    </>
  );

  return <ExpandablePanel header={header}>CONTENT....</ExpandablePanel>;
}

export default UsersListItem;
