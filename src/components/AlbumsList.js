import { GoTrashcan } from "react-icons/go";
import {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, addAlbumResults] = useAddAlbumMutation();
  const [removeAlbum, removeAlbumResults] = useRemoveAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  const handleRemoveAlbum = (album) => {
    removeAlbum(album);
  };

  let content;
  if (isLoading) {
    content = <Skeleton times={3} className="h-10 w-full" />;
  } else if (error) {
    content = <div>Error fetching data...</div>;
  } else {
    content = data.map((album) => {
      const header = (
        <>
          <Button
            className="mr-3"
            // loading={removeAlbumResults.isLoading}
            onClick={() => handleRemoveAlbum(album)}
          >
            <GoTrashcan />
          </Button>
          {album.title}
        </>
      );
      return (
        <ExpandablePanel key={album.id} header={header}>
          List of Album Photos...
        </ExpandablePanel>
      );
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums For: {user.name}</h3>
        <Button loading={addAlbumResults.isLoading} onClick={handleAddAlbum}>
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;
