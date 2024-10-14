// import Image from "next/image";

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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
