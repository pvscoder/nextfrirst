export default function OnlyPhotos({ photo }: { photo: string }) {
  return (
    <div>
      <img
        src={photo}
        alt=""
        className="w-full transition-transform duration-300 hover:scale-110 cursor-pointer"
        data-aos="flip-left"
        data-aos-duration="1000"
      />
    </div>
  );
}
