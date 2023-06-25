import { CanvasPage } from "@/components/canvas";
import { Overlay } from "@/components/overlay";

export default function Home() {
  return (
    <div className="relative h-screen w-full" id="root">
      <CanvasPage />
      {/* <Overlay /> */}
    </div>
  );
}
