/**
 * Base properties for typography components.
 * 
 * @interface BaseTypographyProps
 */
export interface BaseTypographyProps {
  /**
   * The content of the typography component.
   * 
   * @type {React.ReactNode}
   * @required
   */
  children: React.ReactNode;

  /**
   * Additional CSS classes to apply to the typography component.
   * 
   * @type {string}
   * @optional
   */
  className?: string;

  /**
   * Inline styles to apply to the typography component.
   * 
   * @type {React.CSSProperties}
   * @optional
   */
  style?: React.CSSProperties;
}

/**
 * Properties for the Heading component.
 * 
 * @interface HeadingProps
 * @extends BaseTypographyProps
 */
export interface HeadingProps extends BaseTypographyProps {
  /**
   * The level of the heading component, which determines the font size.
   * 
   * @type {1 | 2 | 3 | 4 | 5 | 6}
   * @default 1
   * @required
   */
  level: 1 | 2 | 3 | 4 | 5 | 6;

  /**
   * The HTML tag to use for the heading component. Defaults to a tag based on the level.
   * 
   * @type {"h1" | "h2" | "h3" | "h4" | "h5" | "h6"}
   * @default "h1"
   * @optional
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

/**
 * Properties for the Text component.
 * 
 * @interface TextProps
 * @extends BaseTypographyProps
 */
export interface TextProps extends BaseTypographyProps {
  /**
   * The size of the text component, which controls the font size.
   * 
   * @type {"lg" | "base" | "sm" | "xs"}
   * @default "base"
   * @optional
   */
  size?: "lg" | "base" | "sm" | "xs";

  /**
   * The HTML tag to use for the text component. Defaults to 'p'.
   * 
   * @type {"p" | "span" | "small" | "strong" | "b" | "i" | "em"}
   * @default "p"
   * @optional
   */
  as?: "p" | "span" | "small" | "strong" | "b" | "i" | "em";
}
