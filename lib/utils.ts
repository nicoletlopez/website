export const isImage = (pathname) => /\.(jpg|jpeg|png|gif|webp|avif|svg)$/i.test(pathname ?? "");
