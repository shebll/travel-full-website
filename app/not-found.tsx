import Image from "next/image";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center gap-28 flex-col md:flex-row">
      <div className="">
        <Image
          src={"/images/not-found.svg"}
          alt="not found svg"
          width={600}
          height={400}
        />
      </div>
      <div className="flex justify-center items-start flex-col gap-5 text-xl">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/" className="btn prim">
          Return Home
        </Link>
      </div>
    </div>
  );
}
