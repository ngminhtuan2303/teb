import { MatchList } from "../_components/MatchList";
import { OddsSelector } from "../_components/OddsSelector";
import { ImageSlider } from "../_components/ScrollingImageList";
import { SportsNav } from "../_components/SportNav";

export default function HomePage() {
  return (
    <section className="p-1">
      <div className="bg-black rounded text-center text-lime-400 text-3xl font-bold">
        <ImageSlider />
        <SportsNav />
        <OddsSelector />
        <MatchList />
      </div>
    </section>
  );
}
