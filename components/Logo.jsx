import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/cs.png" width={60} height={60} priority alt="" />
    </Link>
  );
};

export default Logo;
