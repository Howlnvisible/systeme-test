import { ButtonHTMLAttributes, forwardRef } from "react";
import { Loader } from "../loader/loader";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "normal" | "outline" | "custom";
  size?: "big" | "medium" | "small";
  active?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    variant = "normal",
    size = "medium",
    children,
    active,
    loading = false,
    disabled = false,
    ...rest
  } = props;

  return (
    <button
      aria-pressed={active}
      data-variant={variant}
      ref={ref}
      disabled={disabled}
      className={className}
      {...rest}
    >
      {loading ? <Loader /> : children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
