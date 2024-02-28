import Image from "next/image";
import Link from "next/link";
import { hooks } from "./routes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {hooks.map((hook) => (
          <li key={hook.id}>
            <Link href={hook.path} className="text-white">
              {hook.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
