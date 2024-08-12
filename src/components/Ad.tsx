import Image from "next/image";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* TOP */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Anuncio patrocinado</span>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* BOTTOM */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/27591382/pexels-photo-27591382/free-photo-of-passaro-ave-passarinho-amor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/27591382/pexels-photo-27591382/free-photo-of-passaro-ave-passarinho-amor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={24}
            height={24}
            className="rounded-full w-6 h-6 object-cover"
          />
          <span className="text-blue-500 font-medium">BigChef Lounge</span>
        </div>
        <p className={size == "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit"
            : size === "md"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam labore voluptas recusandae id harum nam non"
            : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quis error officiis dolore quibusdam magni placeat repellat debitis, exercitationem, quod repudiandae optio corrupti eos a perferendis maxime facere molestiae laborum."}
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">
          Veja mais
        </button>
      </div>
    </div>
  );
};
export default Ad;
