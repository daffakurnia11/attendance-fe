import Heading from "./Heading";
import Text from "./Text";

/**
 * ### Typography
 * Typography object that bundles together the Heading and Text components for managing typography styles.
 * @module Typography
 * - **Heading** - Heading component that renders a styled heading with customizable tag, level, and styles.
 * - **Text** - Text component that renders a styled text with customizable tag, size, and styles.
 *
 * @returns {object}
 * Typography object that bundles together the Heading and Text components for managing typography styles.
 */
const Typography = {
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
   * <Typography.Heading level={1}>This is a heading</Typography.Heading>
   */
  Heading,

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
   * <Typography.Text>This is a paragraph</Typography.Text>
   *
   * @example
   * // Render a small text with custom class
   * <Typography.Text size="sm" className="custom-class">Small text</Typography.Text>
   */
  Text,
};

export default Typography;
export { Heading, Text };
export type { HeadingProps, TextProps } from "@/types/typography";
