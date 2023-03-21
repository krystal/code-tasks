export const LoadDogs = ({ dogs }) => {
  const toggleImage = typeof dogs == "object" ? dogs.url : dogs;

  return toggleImage.includes("mp4") ? (
    <video
      className="max-w-sm rounded border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
      controls
    >
      <source src={toggleImage} type="video/mp4" />
    </video>
  ) : (
    <img
      className="max-w-sm rounded border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
      src={toggleImage}
      alt="random dogs"
    />
  );
};
