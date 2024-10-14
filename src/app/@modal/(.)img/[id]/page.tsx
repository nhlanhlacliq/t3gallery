import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (isNaN(idAsNumber)) throw new Error("Invalid image id");

  const image = await getImage(idAsNumber);
  return (
    <div className="w-96">
      <Image
        src={image.url}
        alt="image"
        objectFit="contain"
        width={300}
        height={300}
      />
    </div>
  );
}
