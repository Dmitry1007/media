import { useFetchPhotosQuery } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
// import PhotosListItem from "./PhotosListItem";

function PhotosList({ album }) {
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  console.log(data);

  const handleAddPhoto = () => {
    console.log("adding photo");
  };

  let content;
  if (isFetching) {
    content = <Skeleton times={3} className="h-10 w-full" />;
  } else if (error) {
    content = <div>Error fetching data...</div>;
  } else {
    content = data.map((photo) => {
      return <img key={photo.id} className="inline" src={photo.url} alt="" />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-md font-bold">Photos in Album: {album.title}</h3>
        <Button onClick={handleAddPhoto}>+ Add Photo</Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default PhotosList;
