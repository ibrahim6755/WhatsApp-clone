import UserCard from "@/components/UserCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="bg-gray-600">
        <UserCard />
        <h1>Hello world</h1>
      </main>
    </>
  );
}
