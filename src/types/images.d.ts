declare module "*.png" {
  const value: import("next/image").StaticImageData;
  export default value;
}

declare module "*.jpg" {
  const value: import("next/image").StaticImageData;
  export default value;
}

declare module "*.jpeg" {
  const value: import("next/image").StaticImageData;
  export default value;
}

declare module "*.gif" {
  const value: import("next/image").StaticImageData;
  export default value;
}

declare module "*.svg" {
  const value: import("next/image").StaticImageData;
  export default value;
}

declare module "*.webp" {
  const value: import("next/image").StaticImageData;
  export default value;
}

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}
