import * as DistroIcons from "../../components/Icons";

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
  url: "https://ubuntu.com/",
  Icon: DistroIcons.UbuntuIcon,
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
  url: "https://www.debian.org/",
  Icon: DistroIcons.DebianIcon,
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
  url: "https://fedoraproject.org/",
  Icon: DistroIcons.FedoraIcon,
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
  url: "https://www.archlinux.org/",
  Icon: DistroIcons.ArchIcon,
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
  url: "https://manjaro.org/",
  Icon: DistroIcons.ManjaroIcon,
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
  url: "https://www.popos.org/",
  Icon: DistroIcons.PopIcon,
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
  url: "https://www.linuxmint.com/",
  Icon: DistroIcons.LinuxMintIcon,
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
  url: "https://elementary.io/",
  Icon: DistroIcons.ElementaryIcon,
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
  url: "https://zorin.com/os/",
  Icon: DistroIcons.ZorinIcon,
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
  url: "https://www.linuxfromscratch.org/",
  Icon: DistroIcons.LinuxIcon, // this will be the default icon
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
  url: "https://www.opensuse.org/",
  Icon: DistroIcons.OpenSUSEIcon,
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
