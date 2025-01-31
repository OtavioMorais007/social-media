import Image from "next/image";
import Link from "next/link";

const UserMediaCard = ({ userId }: { userId: String }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Midia do usuario</span>
        <Link href="/" className="text-blue-500 text-xs">
          Ver todos
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/27054232/pexels-photo-27054232/free-photo-of-a-road-with-a-sign-that-says-road-to-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/27054232/pexels-photo-27054232/free-photo-of-a-road-with-a-sign-that-says-road-to-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/27054232/pexels-photo-27054232/free-photo-of-a-road-with-a-sign-that-says-road-to-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/27054232/pexels-photo-27054232/free-photo-of-a-road-with-a-sign-that-says-road-to-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/27054232/pexels-photo-27054232/free-photo-of-a-road-with-a-sign-that-says-road-to-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};
export default UserMediaCard;
