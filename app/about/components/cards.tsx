import Image from "next/image";

export function WhoCard() {
  return (
    <div className="p-4 flex flex-col items-center justify-center w-fit gap-4 mt-10">
      <div className="flex flex-row items-center justify-center shadow-md rounded-lg p-10 gap-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="fustat text-4xl font-bold">WHO WE ARE</h2>
          <p>
            We’re Elane & Janice, two friends living in nyc who want to create a
            space for singles to meet outside their local communities! The
            foundation? Faith.{" "}
          </p>
        </div>
        <Image
          src="/who.jpg"
          alt="a picture of janice and elane"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
