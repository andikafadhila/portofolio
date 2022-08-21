import { NextPage } from "next";

type Props = {
  children: string | JSX.Element;
  className: string;
  icon: JSX.Element;
};

const ButtonCustom: NextPage<Props> = ({
  children,
  className,
  icon,
}: Props) => {
  return (
    <button
      className={`${className} dark:text-GreenCustom dark:border-GreenCustom border-[1px] dark:hover:bg-GreenCustom dark:hover:bg-opacity-10 transition duration-100 rounded-md`}
    >
      {icon}
      {children}
    </button>
  );
};

export default ButtonCustom;
