import { IconBaseProps } from "react-icons";
import { FaPlus, FaMinus } from "react-icons/fa6";

const defaultStyle: React.CSSProperties = {
  display: "inline-block",
};

export interface IconProps extends IconBaseProps {
  color?: string;
  size?: string;
}

export function Plus({ color, size, ...rest }: IconProps) {
  const localStyle: React.CSSProperties = {
    position: "relative",
    top: "-0.08rem",
  };

  rest.style = Object.assign(
    defaultStyle,
    Object.assign(localStyle, rest.style)
  );

  return (
    <FaPlus
      className={color ? undefined : "text-primary-600"}
      color={color ? color : undefined}
      size={size}
      {...rest}
    />
  );
}

export function Minus({ color, size, ...rest }: IconProps) {
  const localStyle: React.CSSProperties = {
    position: "relative",
    top: "-0.08rem",
  };

  rest.style = Object.assign(
    defaultStyle,
    Object.assign(localStyle, rest.style)
  );

  return (
    <FaMinus
      className={color ? undefined : "text-primary-600"}
      color={color ? color : undefined}
      size={size}
      {...rest}
    />
  );
}
