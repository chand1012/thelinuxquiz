// this is where the ratings for each
// distro will be stored
// as well as a link to their sites

export const ubuntu = {
  security: 8,
  stability: 8,
  community: 10,
  experience: 1,
  privacy: 3,
  ux: 7,
  games: true,
  windows: 5,
  displayName: "Ubuntu",
  url: "https://ubuntu.com/",
};

export const debian = {
  security: 8,
  stability: 8,
  community: 9,
  experience: 3,
  privacy: 6,
  ux: 6,
  games: true,
  windows: 1,
  displayName: "Debian",
  url: "https://www.debian.org/",
};

export const fedora = {
  security: 9,
  stability: 8,
  community: 7,
  experience: 5,
  privacy: 5,
  ux: 8,
  games: true,
  windows: 7,
  displayName: "Fedora",
  url: "https://getfedora.org/",
};

export const arch = {
  security: 8,
  stability: 6,
  community: 9,
  experience: 6,
  privacy: 8,
  ux: 10,
  games: true,
  windows: 1,
  displayName: "Arch Linux",
  url: "https://www.archlinux.org/",
};

// manjaro ratings
export const manjaro = {
  security: 8,
  stability: 8,
  community: 9,
  experience: 4,
  privacy: 8,
  ux: 8,
  games: true,
  windows: 4,
  displayName: "Manjaro",
  url: "https://manjaro.org/",
};

export const popOS = {
  security: 8,
  stability: 8,
  community: 10,
  experience: 1,
  privacy: 7,
  ux: 7,
  games: true,
  windows: 7,
  displayName: "Pop!_OS",
  url: "https://pop.system76.com/",
};

export const linuxMint = {
  security: 8,
  stability: 8,
  community: 10,
  experience: 1,
  privacy: 7,
  ux: 7,
  games: true,
  windows: 10,
  displayName: "Linux Mint",
  url: "https://www.linuxmint.com/",
};

export const elementary = {
  security: 8,
  stability: 8,
  community: 8,
  experience: 1,
  privacy: 6,
  ux: 8,
  games: true,
  windows: 3,
  displayName: "Elementary OS",
  url: "https://elementary.io/",
};

export const zorin = {
  security: 8,
  stability: 8,
  community: 6,
  experience: 1,
  privacy: 6,
  ux: 8,
  games: true,
  windows: 6,
  displayName: "Zorin OS",
  url: "https://zorin.com/os/",
};

export const linuxFromScratch = {
  security: 8,
  stability: 5,
  community: 6,
  experience: 10,
  privacy: 9,
  ux: 7,
  games: false, // this may change
  windows: 1,
  displayName: "Linux From Scratch",
  url: "https://www.linuxfromscratch.org/",
};

export const opensuse = {
  security: 8,
  stability: 8,
  community: 7,
  experience: 3,
  privacy: 8,
  ux: 6,
  games: true,
  windows: 1,
  displayName: "openSUSE",
  url: "https://www.opensuse.org/",
};

const linuxDistros = {
  ubuntu,
  debian,
  fedora,
  arch,
  popOS,
  linuxMint,
  elementary,
  zorin,
  linuxFromScratch,
  opensuse,
};

export default linuxDistros;
