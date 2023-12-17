import { PropsWithChildren, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: any;
  value?: boolean;
}

const Button = ({ children, onClick, value }: Props) => {
  return (
    <button
      disabled={value}
      onClick={onClick}
      className="bg-white m-1 rounded-md px-4 py-1 text-black"
    >
      {children}
    </button>
  );
};

export default Button;
