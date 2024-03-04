function Imageslider({ IMAGES }) {
  return (
    <div className="flex">
      {IMAGES.map((s, index) => {
        return <img key={index} src={s} alt={`image-${index}`} />;
      })}
    </div>
  );
}

export default Imageslider;
