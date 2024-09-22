import { footer } from "../../data/title";

type Props = {};

const Footer = ({}: Props) => {
  return (
    <div className="py-10 mt-auto flex flex-col w-full bg-[#09132e] text-[#c9e1ec] text-sm shadow-lg">
      <div className="lg:w-1/2 md:w-3/4 sm:w-11/12 w-10/12 mx-auto font-semibold text-center p-2">
        {footer}
      </div>
    </div>
  );
};

export default Footer;
