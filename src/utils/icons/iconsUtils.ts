import React from "react";
import {
  FaJs,
  FaPython,
  FaJava,
  FaPhp,
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaSwift,
  FaRust,
  FaAngular,
  FaVuejs,
  FaLaravel,
  FaDocker,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiSharp,
  SiTypescript,
  SiRuby,
  SiKotlin,
  SiGo,
  SiR,
  SiScala,
  SiPerl,
  SiHaskell,
  SiVim,
  SiElixir,
  SiDart,
  SiShell,
  SiLua,
  SiSqlite,
} from "react-icons/si";

interface LanguageIcon {
  icon: React.ElementType; // O componente do ícone
  color: string; // A cor do ícone
}

export const languageIcons: Record<string, LanguageIcon> = {
  JavaScript: { icon: FaJs, color: "#F7DF1E" },
  Python: { icon: FaPython, color: "#3776AB" },
  Java: { icon: FaJava, color: "#007396" },
  PHP: { icon: FaPhp, color: "#777BB4" },
  HTML: { icon: FaHtml5, color: "#E34F26" },
  CSS: { icon: FaCss3, color: "#1572B6" },
  React: { icon: FaReact, color: "#61DAFB" },
  Node: { icon: FaNodeJs, color: "#43853D" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  C: { icon: SiCplusplus, color: "#00599C" },
  "C++": { icon: SiCplusplus, color: "#00599C" },
  "C#": { icon: SiSharp, color: "#239120" },
  Ruby: { icon: SiRuby, color: "#CC342D" },
  Swift: { icon: FaSwift, color: "#FA7343" },
  Kotlin: { icon: SiKotlin, color: "#0095D5" },
  Go: { icon: SiGo, color: "#00ADD8" },
  Rust: { icon: FaRust, color: "#DEA584" },
  R: { icon: SiR, color: "#276DC3" },
  Scala: { icon: SiScala, color: "#DC322F" },
  Perl: { icon: SiPerl, color: "#39457E" },
  Haskell: { icon: SiHaskell, color: "#5D4F85" },
  Shell: { icon: SiShell, color: "#FFD500" },
  Lua: { icon: SiLua, color: "#000080" },
  SQL: { icon: SiSqlite, color: "#003B57" },
  Vim: { icon: SiVim, color: "#019733" },
  Elixir: { icon: SiElixir, color: "#4E2A8E" },
  Dart: { icon: SiDart, color: "#0175C2" },
  Vue: { icon: FaVuejs, color: "#4FC08D" },
  Angular: { icon: FaAngular, color: "#DD0031" },
  Docker: { icon: FaDocker, color: "#2496ED" },
  Laravel: { icon: FaLaravel, color: "#FF2D20" },
};

export const getIconForLanguage = (language: string) => {
  return languageIcons[language] || null; // Retorna null se não encontrar o ícone
};
