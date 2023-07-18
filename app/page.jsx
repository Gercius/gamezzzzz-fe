import Link from "next/link";
  
export default async function Home() {
  return (
      <>
        <p className="text-yellow-100">Smthing smthing <Link href="http://localhost:3000/games">games</Link></p>
      </>
  );
}
