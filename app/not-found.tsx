import Image from "next/image";
import { ButtonSimple } from "@/components/Button";
import NotFoundImg from "@/public/images/universal/404-notfound.png";

const NotFound = () => {
  return (
    <div className="notfound text-light p-[6%]">
      <main className="notfound__main w-full h-auto flex flex-col items-center space-y-6 sm:space-y-10 lg:space-y-4 2xl:space-y-6">
        <h1 className="text-2xl font-bold text-center sm:text-4xl lg:text-4xl">
          Sorry, your page is not found.
        </h1>
        <div className="notfound__main-image w-full lg:w-4/12 h-auto">
          <Image
            src={NotFoundImg}
            alt="Not Found"
            width={NotFoundImg.width}
            loading="eager"
          />
        </div>
        <ButtonSimple to="/">Go back home</ButtonSimple>
      </main>
    </div>
  );
};

export default NotFound;
