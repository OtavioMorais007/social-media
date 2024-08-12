import Image from "next/image";
import Link from "next/link";

const UserInfoCard = ({ userId }: { userId: String }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Informacao do usuario</span>
        <Link href="/" className="text-blue-500 text-xs">
          Ver todos
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col gap-4 text-gray-400">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Kenneth McGee</span>
          <span className="text-sm">Sanders</span>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          culpa eum voluptatibus dolores.
        </p>
        <div className="flex items-center gap-4">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span>
            Morando em <b>Londres</b>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Image src="/school.png" alt="" width={16} height={16} />
          <span>
            Foi para o <b>MIT</b>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Image src="/work.png" alt="" width={16} height={16} />
          <span>
            Trabalhando na <b>Apple.inc</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center ">
            <Image src="/link.png" alt="" width={16} height={16} />
            <Link
              href="https://otavio.dev"
              className="text-blue-500 font-medium"
            >
              otavio.dev
            </Link>
            <div className="flex gap-1 items-center">
              <Image src="/link.png" alt="" width={16} height={16} />
              <span>Se juntou em Novembro de 2024</span>
            </div>
          </div>
        </div>
        <button className="w-full bg-blue-500 text-white text-sm rounded-md p-2">
          Seguir
        </button>
        <button>
          <span className="text-red-400 self-end text-xs cursor-pointer">
            Bloquear usuario
          </span>
        </button>
      </div>
    </div>
  );
};
export default UserInfoCard;
