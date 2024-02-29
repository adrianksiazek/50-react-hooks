import Image from "next/image";
import Link from "next/link";
import { hooks } from "./routes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-xl">
      <ul className="flex flex-col gap-6">
        {hooks.map((hook) => (
          <li key={hook.id}>
            <Link
              href={hook.path}
              className="text-white hover:text-gray-600 transition-all rounded-xl p-8">
              {hook.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
