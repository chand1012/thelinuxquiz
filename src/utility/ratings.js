// this is where the ratings for each
// distro will be stored
// as well as a link to their sites

export const ubuntu = {
  security: 3, // Ubuntu is the security baseline
  stability: 4,
  community: 5,
  experience: 2,
  privacy: 1,
  customize: 2,
  install: 5,
  ux: 4,
  games: 1,
  windows: 3, // Ubuntu is the windows-likeness baseline
  displayName: "Ubuntu",
  url: "https://ubuntu.com/",
};

export const debian = {
  security: 4,
  stability: 4,
  community: 4,
  experience: 3,
  privacy: 3, // Debian is the privacy baseline
  customize: 3, // Debian is the customization baseline
  install: 3, // Debian is the installation baseline
  ux: 3, // Debian is the user experience baseline
  games: 1,
  windows: 2,
  displayName: "Debian",
  url: "https://www.debian.org/",
};

export const arch = {
  security: 4,
  stability: 2,
  community: 4,
  experience: 4,
  privacy: 4,
  customize: 5,
  install: 2,
  ux: 5,
  games: 1,
  windows: 3,
  displayName: "Arch Linux",
  url: "https://www.archlinux.org/",
};

// manjaro ratings
export const manjaro = {
  security: 4,
  stability: 2,
  community: 4,
  experience: 3,
  privacy: 4,
  customize: 3,
  install: 4,
  ux: 4,
  games: 1,
  windows: 4,
  displayName: "Manjaro",
  url: "https://manjaro.org/",
};

export const popOS = {
  security: 3,
  stability: 4,
  community: 5,
  experience: 2,
  privacy: 3,
  customize: 2,
  install: 5,
  ux: 4,
  games: 1,
  windows: 2,
  displayName: "Pop!_OS",
  url: "https://pop.system76.com/",
};

export const linuxMint = {
  security: 3,
  stability: 4,
  community: 5,
  experience: 2,
  privacy: 2,
  customize: 3,
  install: 5,
  ux: 3,
  games: 1,
  windows: 5,
  displayName: "Linux Mint",
  url: "https://www.linuxmint.com/",
};

export const elementary = {
  security: 3,
  stability: 4,
  community: 5,
  experience: 2,
  privacy: 3,
  customize: 2,
  install: 5,
  ux: 4,
  games: 1,
  windows: 1,
  displayName: "Elementary OS",
  url: "https://elementary.io/",
};

export const zorin = {
  security: 3,
  stability: 4,
  community: 5,
  experience: 1,
  privacy: 2,
  customize: 1,
  install: 5,
  ux: 4,
  games: 1,
  windows: 5,
  displayName: "Zorin OS",
  url: "https://zorin.com/os/",
};

// This is a meme.
export const linuxFromScratch = {
  security: 13,
  stability: -4,
  community: 0,
  experience: 30,
  privacy: 30,
  customize: 69,
  install: -4,
  ux: -6,
  games: 0, // this may change
  windows: -95,
  displayName: "Linux From Scratch",
  url: "https://www.linuxfromscratch.org/",
};

export const gentoo = {
  security: 4,
  stability: 1,
  community: 3,
  experience: 5,
  privacy: 5,
  customize: 4,
  install: 1,
  ux: 4,
  games: 0, // can someone give us input on if gentoo can run games? Plz make PR.
  windows: 1,
  displayName: "Gentoo",
  url: "https://www.gentoo.org/",
};

export const opensuse = {
  security: 4,
  stability: 4,
  community: 2,
  experience: 4,
  privacy: 3,
  customize: 2,
  install: 3,
  ux: 2,
  games: 1,
  windows: 1,
  displayName: "openSUSE",
  url: "https://www.opensuse.org/",
};

export const fedora = {
  security: 4,
  stability: 4,
  community: 2,
  experience: 3,
  privacy: 4,
  customize: 2,
  install: 2,
  ux: 3,
  games: 1,
  windows: 2,
  displayName: "Fedora",
  url: "https://getfedora.org/",
};

export const desktopLinuxDistros = {
  ubuntu,
  debian,
  arch,
  popOS,
  linuxMint,
  elementary,
  zorin,
  linuxFromScratch,
  gentoo,
  fedora,
  opensuse,
};
