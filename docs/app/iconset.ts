export type TIcon = {
  name: string;
  icon: Record<string, string>;
  width: number;
  height: number;
};

const appleIcons: TIcon[] = [
  {
    name: "apple-icon-256x256.png",
    icon: {
      rel: "apple-touch-icon-256x256",
    },
    width: 256,
    height: 256,
  },
  {
    name: "apple-icon-196x196.png",
    icon: {
      rel: "apple-touch-icon-196x196",
    },
    width: 196,
    height: 196,
  },
  {
    name: "apple-icon-192x192.png",
    icon: {
      rel: "apple-touch-icon-192x192",
    },
    width: 192,
    height: 192,
  },
  {
    name: "apple-icon-180x180.png",
    icon: {
      rel: "apple-touch-icon-180x180",
    },
    width: 180,
    height: 180,
  },
  {
    name: "apple-icon-167x167.png",
    icon: {
      rel: "apple-touch-icon-167x167",
    },
    width: 167,
    height: 167,
  },
  {
    name: "apple-icon-160x160.png",
    icon: {
      rel: "apple-touch-icon-160x160",
    },
    width: 160,
    height: 160,
  },
  {
    name: "apple-icon-152x152.png",
    icon: {
      rel: "apple-touch-icon-152x152",
    },
    width: 152,
    height: 152,
  },
  {
    name: "apple-icon-120x120.png",
    icon: {
      rel: "apple-touch-icon-120x120",
    },
    width: 120,
    height: 120,
  },
  {
    name: "apple-icon-76x76.png",
    icon: {
      rel: "apple-touch-icon-76x76",
    },
    width: 76,
    height: 76,
  },
];

export const favIcons: TIcon[] = [
  {
    name: "favicon-64.png",
    icon: {
      rel: "icon",
      type: "image/png",
      sizes: "64x64",
    },
    width: 64,
    height: 64,
  },
  {
    name: "favicon-32.png",
    icon: {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
    },
    width: 32,
    height: 32,
  },
  {
    name: "favicon-16.png",
    icon: {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
    },
    width: 16,
    height: 16,
  },
];

export const otherIcons: TIcon[] = [
  {
    name: "shortcut.png",
    icon: {
      rel: "shortcut icon",
      type: "image/png",
    },
    width: 512,
    height: 512,
  },
  {
    name: "icon-128x128.png",
    icon: {
      rel: "icon",
      type: "image/png",
    },
    width: 128,
    height: 128,
  },
];

export const manifestIcons: TIcon[] = [
  {
    name: "manifest-icon-512x512.png",
    icon: {
      type: "image/png",
    },
    width: 512,
    height: 512,
  },
  {
    name: "manifest-icon-192x192.png",
    icon: {
      type: "image/png",
    },
    width: 128,
    height: 128,
  },
];

export const linkedIcons: TIcon[] = appleIcons.concat(favIcons).concat(otherIcons);

export const icons: TIcon[] = appleIcons.concat(favIcons).concat(otherIcons).concat(manifestIcons);
