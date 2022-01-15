declare module '*.jpg';
declare module '*.jpeg';
declare module "*.svg";

declare module '*.svg?inline' {
  const content: any
  export default content
}
