import { GoTrashcan } from "react-icons/go";
import { useRemoveUserMutation } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

function UsersListItem({ user }) {
  const [removeUser, removeUserResults] = useRemoveUserMutation();

  const handleUserRemove = () => {
    removeUser(user);
  };

  const header = (
    <>
      <Button
        className="mr-3"
        loading={removeUserResults.isLoading}
        onClick={handleUserRemove}
      >
        <GoTrashcan />
      </Button>
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
