import { GoTrashcan } from "react-icons/go";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

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

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}

export default UsersListItem;
