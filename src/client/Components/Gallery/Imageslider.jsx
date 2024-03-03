function Imageslider({ IMAGES }) {
  return (
    <div>
      {IMAGES.map((s) => {
        return <img src={s} />;
      })}
    </div>
  );
}
export default Imageslider;
