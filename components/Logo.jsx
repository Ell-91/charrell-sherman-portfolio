import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <div className=" flex justify-between gap-x-2.5 text-md font-semibold  tracking-[4px]">
        <div className="text-[#32334c]">Charrell</div>
        <div className="text-primary">Sherman</div>
      </div>
    </Link>
  );
};

export default Logo;
