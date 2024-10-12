import type { TextProps } from ".";
import { inter } from "@/utils/fonts";
import classNames from "classnames";
import * as React from "react";

/**
 * ### Text Component
 * Text component that renders a styled text with customizable tag, size, and styles.
 *
 * @param {React.ReactNode} props.children
 * - The content of the text component. - **Required**
 * @param {"lg" | "base" | "sm" | "xs"} [props.size="base"]
 * - The size of the text. Can be 'lg' (large), 'base', 'sm' (small), or 'xs' (extra small). Defaults to 'base'. - **Optional**
 * @param {"p" | "span" | "small" | "strong" | "b" | "i" | "em"} [props.as="p"]
 * - The HTML tag to use for the text component. Defaults to 'p'. Can be 'p', 'span', 'small', 'strong', 'b', 'i', or 'em'. - **Optional**
 * @param {string} [props.className]
 * - Additional CSS classes to apply to the text component. - **Optional**
 * @param {React.CSSProperties} [props.style]
 * - Inline styles to apply to the text component. - **Optional**
 *
 * @returns {JSX.Element}
 * The rendered text element with the specified tag, styles, and content.
 *
 * @example
 * // Render a paragraph with base size
 * <Text>This is a paragraph</Text>
 *
 * @example
 * // Render a small text with custom class
 * <Text size="sm" className="custom-class">Small text</Text>
 */
const Text: React.FunctionComponent<TextProps> = ({
  as,
  size,
  children,
  className,
  ...props
}) => {
  const textSize = {
    lg: "text-lg",
    base: "text-base",
    sm: "text-sm",
    xs: "text-xs",
  };
  const textSizeClass = textSize[size || "base"];

  const Component = as || "p";

  return (
    <Component
      {...props}
      className={classNames(className, inter.className, textSizeClass)}
    >
      {children}
    </Component>
  );
};

export default Text;
