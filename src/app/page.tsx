// import Image from "next/image";

import { headers } from "next/headers";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/AHNDux7fFxMTTUK1EEwFSc0R42Dgj3AZrdQzp5uIfahbvNwE",
  "https://utfs.io/f/AHNDux7fFxMTlL8WEdCr3Nz4aD0AQPpC2SqkOngo9hctHEMU",
  "https://utfs.io/f/AHNDux7fFxMTgGuXs1BtSY1uDj2zTCEmv9xIFcWHsZbip6L4",
  "https://utfs.io/f/AHNDux7fFxMT6fm1wTqHixIU2w1qWRNG0YDEJ4V9KCLPmBfo",
  "https://utfs.io/f/AHNDux7fFxMThSIaes3ryHid14qRvuf2Awt90coxXsM3I8TQ",
];

const mockImages = mockUrls.map((url, i) => ({
  id: i + 1,
  url,
}));

export default async function HomePage() {
  const post = await db.query.posts.findMany();

  console.log(post);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {post.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
