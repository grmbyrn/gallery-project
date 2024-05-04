import Link from "next/link";

const mockUrls = [
  'https://utfs.io/f/201bfd13-8bfe-466d-8618-088a99e733cb-gm68xt.jpg',
  'https://utfs.io/f/ddc289d0-9f81-40f7-b712-03b6c668d817-op1fdn.jpg',
  'https://utfs.io/f/014d5e01-8115-4f0b-8a5e-4710a181060b-7kklw5.jpg',
  'https://utfs.io/f/a378d6c5-44dd-41df-905d-ae83cc3264e8-u330qi.jpg'
]

const mockImages = mockUrls.map((url, index) =>({
  id: index + 1,
  url
}))

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48 p-4">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello world
    </main>
  );
}
