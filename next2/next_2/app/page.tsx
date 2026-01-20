import Image from "next/image";
import axios from "axios"
import Link from "next/link";
export default async function Home() {

  return (
    <div>
      <div>welcome to todo</div>
      <br />
      <Link href="signin"> signin</Link>
      <br />
      <br />
      <Link href="signup"> signup</Link>
    </div>
  );
}