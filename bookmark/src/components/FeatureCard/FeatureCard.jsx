import { useEffect, useLayoutEffect, useRef, useState } from "react";

function FeatureCard({ imageSrc, alt, children }) {
  const bgRef = useRef(null);
  const imgRef = useRef(null);
  const [image, setImage] = useState("");

  // Load image dynamically when prop changes
  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const mod = await import(`../../assets/${imageSrc}.svg`);
        if (!cancelled) setImage(mod.default || mod);
      } catch (e) {
        if (!cancelled) setImage("");
        console.error("Failed to load image", imageSrc, e);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [imageSrc]);

  // Reset hidden state before paint when image changes
  useLayoutEffect(() => {
    const bg = bgRef.current;
    const im = imgRef.current;
    if (bg) {
      bg.classList.remove("scale-x-100", "transition-transform", "duration-700", "ease-in-out");
      bg.classList.add("scale-x-0");
    }
    if (im) {
      im.classList.remove("scale-100", "transition-transform", "duration-700", "ease-in-out");
      im.classList.add("scale-0");
    }
  }, [image]);

  // Trigger the animation after mount/update
  useEffect(() => {
    const bg = bgRef.current;
    const im = imgRef.current;
    const r = requestAnimationFrame(() => {
      if (bg) {
        bg.classList.add("transition-transform", "duration-700", "ease-in-out", "scale-x-100");
      }
      if (im) {
        im.classList.add("transition-transform", "duration-700", "ease-in-out", "scale-100");
      }
    });
    return () => cancelAnimationFrame(r);
  }, [image]);

  return (
    <div data-feature-card id="data-feature-card">
      {image && (
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between app-max-width space-y-6 lg:space-y-0">
          <div className="lg:hidden">
            <img src={image} alt={alt} />
          </div>
          <div className="hidden lg:block relative w-1/2 lg:pr-6">
          <div className="w-70 lg:w-100 h-70 lg:h-100 flex items-center">
            <img ref={imgRef} src={image} alt={alt} className="scale-0" />
          </div>
            <div
              ref={bgRef}
              className="-z-10 bg-rose-300 h-60 w-500 overflow-hidden absolute top-[30%] right-0 rounded-r-full transform origin-left scale-x-0"
            ></div>
          </div>
          {children}
        </div>
      )}
    </div>
  );
}

export default FeatureCard;
