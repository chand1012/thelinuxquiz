import React from "react";
import UbuntuSVG from "../svg/Ubuntu.svg";
import DebianSVG from "../svg/debian.svg";
import FedoraSVG from "../svg/Fedora.svg";
import ArchSVG from "../svg/Arch.svg";
import GentooSVG from "../svg/gentoo.svg";
import OpenSUSESVG from "../svg/OpenSUSE.svg";
import ManjaroSVG from "../svg/Manjaro.svg";
import ZorinSVG from "../svg/Zorin.svg";
import MintSVG from "../svg/Mint.svg";
import PopSVG from "../svg/Pop.svg";
import ElementarySVG from "../svg/Elementary.svg";
import TuxIcon from "../svg/Linux.svg";

// more will need to be added as we go

// ubuntu icon
export const UbuntuIcon = (props) => {
  if (props.size) {
    return (
      <img src={UbuntuSVG} width={props.size} height={props.size} {...props} />
    );
  }

  return <img src={UbuntuSVG} alt="Ubuntu" {...props} />;
};

// debian icon
export const DebianIcon = (props) => {
  if (props.size) {
    return (
      <img src={DebianSVG} width={props.size} height={props.size} {...props} />
    );
  }

  return <img src={DebianSVG} alt="Debian" {...props} />;
};

// fedora icon
export const FedoraIcon = (props) => {
  if (props.size) {
    return (
      <img src={FedoraSVG} width={props.size} height={props.size} {...props} />
    );
  }

  return <img src={FedoraSVG} alt="Fedora" {...props} />;
};

// arch icon
export const ArchIcon = (props) => {
  if (props.size) {
    return (
      <img src={ArchSVG} width={props.size} height={props.size} {...props} />
    );
  }

  return <img src={ArchSVG} alt="Arch" {...props} />;
};

// gentoo icon
export const GentooIcon = (props) => {
  if (props.size) {
    return (
      <img src={GentooSVG} width={props.size} height={props.size} {...props} />
    );
  }

  return <img src={GentooSVG} alt="Gentoo" {...props} />;
};

// opensuse icon
export const OpenSUSEIcon = (props) => {
  if (props.size) {
    return (
      <img
        src={OpenSUSESVG}
        width={props.size}
        height={props.size}
        {...props}
      />
    );
  }

  return <img src={OpenSUSESVG} alt="OpenSUSE" {...props} />;
};

// manjaro icon
export const ManjaroIcon = (props) => {
  if (props.size) {
    return (
      <img src={ManjaroSVG} width={props.size} height={props.size} {...props} />
    );
  }

  return <img src={ManjaroSVG} alt="Manjaro" {...props} />;
};

// zorin icon
export const ZorinIcon = (props) => {
  if (props.size) {
    return (
      <img src={ZorinSVG} width={props.size} height={props.size} {...props} />
    );
  }

  return <img src={ZorinSVG} alt="Zorin" {...props} />;
};

// mint icon
export const MintIcon = (props) => {
  if (props.size) {
    return (
      <img src={MintSVG} width={props.size} height={props.size} {...props} />
    );
  }

  return <img src={MintSVG} alt="Mint" {...props} />;
};

// pop icon
export const PopIcon = (props) => {
  if (props.size) {
    return (
      <img src={PopSVG} width={props.size} height={props.size} {...props} />
    );
  }

  return <img src={PopSVG} alt="Pop" {...props} />;
};

// elementary icon
export const ElementaryIcon = (props) => {
  if (props.size) {
    return (
      <img
        src={ElementarySVG}
        width={props.size}
        height={props.size}
        {...props}
      />
    );
  }

  return <img src={ElementarySVG} alt="Elementary" {...props} />;
};

// linux icon
export const LinuxIcon = (props) => {
  if (props.size) {
    return (
      <img src={TuxIcon} width={props.size} height={props.size} {...props} />
    );
  }

  return <img src={TuxIcon} alt="Tux" {...props} />;
};

export const Icon = (props) => {
  const { name } = props;

  switch (name) {
    case "ubuntu":
      return <UbuntuIcon {...props} />;
    case "debian":
      return <DebianIcon {...props} />;
    case "fedora":
      return <FedoraIcon {...props} />;
    case "arch":
      return <ArchIcon {...props} />;
    case "gentoo":
      return <GentooIcon {...props} />;
    case "opensuse":
      return <OpenSUSEIcon {...props} />;
    case "manjaro":
      return <ManjaroIcon {...props} />;
    case "zorin":
      return <ZorinIcon {...props} />;
    case "linuxMint":
      return <MintIcon {...props} />;
    case "popOS":
      return <PopIcon {...props} />;
    case "elementary":
      return <ElementaryIcon {...props} />;
    default:
      return <LinuxIcon {...props} />;
  }
};

export default Icon;
