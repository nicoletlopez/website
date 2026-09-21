export const isImage = (pathname: string) => /\.(jpg|jpeg|png|gif|webp|avif|svg)$/i.test(pathname ?? "");
