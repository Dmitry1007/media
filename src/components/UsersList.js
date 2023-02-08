import { useMemo } from "react";
import { useFetchUsersQuery, useAddUserMutation } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import UsersListItem from "./UsersListItem";

function UsersList() {
  const {
    data: users = [],
    isLoading,
    isFetching,
    isError,
    error,
    isSuccess,
    // refetch,
  } = useFetchUsersQuery();
  const [addUser, addUserResults] = useAddUserMutation();

  const handleUserAdd = () => {
    addUser();
  };

  const sortedUsers = useMemo(() => {
    const sortedUsers = users.slice();
    // Sort users in descending chronological order
    sortedUsers.sort((a, b) => a.name.localeCompare(b.name));
    return sortedUsers;
  }, [users]);

  let content;
  if (isLoading) {
    console.log("Making first Request to the Server");
  } else if (isFetching) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (isError) {
    content = <div>Network Error fetching data... {error}</div>;
  } else if (isSuccess) {
    content = sortedUsers.map((user) => {
      return <UsersListItem key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={addUserResults.isLoading} onClick={handleUserAdd}>
          + Add User
        </Button>
      </div>
      {content}
    </div>
  );
}

export default UsersList;
