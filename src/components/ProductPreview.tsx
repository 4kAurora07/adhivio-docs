import mockup2 from "@/assets/phone-mockup-2.png";
import mockup3 from "@/assets/phone-mockup-3.png";

const ProductPreview = () => {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-primary">
            See Adhivio in action.
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
          <img
            src={mockup2}
            alt="Adhivio reminder creation screen"
            className="w-[240px] lg:w-[280px] rounded-3xl drop-shadow-xl"
          />
          <img
            src={mockup3}
            alt="Adhivio settings screen"
            className="w-[240px] lg:w-[280px] rounded-3xl drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
