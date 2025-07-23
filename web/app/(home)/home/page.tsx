import { ImageSlider } from "../_components/ScrollingImageList";

export default function HomePage() {
  return (
    <section className="p-10">
      <div className="bg-black p-10 rounded text-center text-lime-400 text-3xl font-bold">
        <ImageSlider />
      </div>
    </section>
  );
}
