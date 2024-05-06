import Image from "next/image";

const Locations = () => {
  return (
    <div className="container mx-auto mt-8">
        <h2 className="text-xl font-bold text-center">Office Locations</h2>

        <div className="flex justify-left">
          <div className="p-2">
            <h3 className="text-lg font-bold mb-2">Canada</h3>
            <Image
              priority
              src="/Canada-flags.svg"
              height={180}
              width={180}
              alt="Canada"
            />
            <p>Phone: +1 514-123-3456</p>
          </div>
          <div className="p-2">
            <h3 className="text-lg font-bold mb-2">Germany</h3>
            <Image
              priority
              src="/Germany-flags.svg"
              height={150}
              width={150}
              alt="Canada"
            />
            <p>Phone: +49 123 456 789</p>
          </div>
        </div>
    </div>
  );
};

export default Locations;


