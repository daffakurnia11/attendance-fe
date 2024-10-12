import type { HeadingProps } from ".";
import { inter } from "@/utils/fonts";
import classNames from "classnames";
import * as React from "react";

/**
 * ### Heading Component
 * Heading component that renders a styled heading with customizable tag, level, and styles.
 *
 * @param {React.ReactNode} props.children
 * - The content of the heading component. - **Required**
 * @param {1 | 2 | 3 | 4 | 5 | 6} [props.level=1]
 * - The level of the heading, which determines the font size. Defaults to 1. Can be 1, 2, 3, 4, 5, or 6. - **Required**
 * @param {"h1" | "h2" | "h3" | "h4" | "h5" | "h6"} [props.as]
 * - The HTML tag to use for the heading component. Defaults to the value based on the level. Can be 'h1', 'h2', 'h3', 'h4', 'h5', or 'h6'. - **Optional**
 * @param {string} [props.className]
 * - Additional CSS classes to apply to the heading component. - **Optional**
 * @param {React.CSSProperties} [props.style]
 * - Inline styles to apply to the heading component. - **Optional**
 *
 * @returns {JSX.Element}
 * The rendered heading element with the specified tag, styles, and content.
 *
 * @example
 * // Render an h1 heading
 * <Heading level={1}>This is a heading</Heading>
 */
const Heading: React.FC<HeadingProps> = ({
  as,
  level,
  children,
  className,
  ...props
}) => {
  const textSize = {
    1: "text-6xl",
    2: "text-5xl",
    3: "text-4xl",
    4: "text-3xl",
    5: "text-2xl",
    6: "text-xl",
  };
  const textSizeClass = textSize[level || 1];

  const Component =
    as ||
    (level === 1
      ? "h1"
      : level === 2
      ? "h2"
      : level === 3
      ? "h3"
      : level === 4
      ? "h4"
      : level === 5
      ? "h5"
      : "h6");

  return (
    <Component
      {...props}
      className={classNames(className, textSizeClass, inter.className)}
    >
      {children}
    </Component>
  );
};

export default Heading;
