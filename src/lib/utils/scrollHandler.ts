import { halamanAktif, menuTerbuka, showNavbar } from "../store/ui";
import { get } from "svelte/store";

export function handleScroll() {
  const offset = 100;
  const posisi = window.scrollY + offset;
  const tinggiHalaman = document.documentElement.scrollHeight;
  const tinggiViewport = window.innerHeight;

  const section = (id: string) => document.getElementById(id)?.offsetTop ?? 0;
  const topNavbar = document.getElementById("topNavbar");
  const navbarBottom = topNavbar?.offsetHeight ?? 0;

  const posisiAktif =
    posisi >= section("section_5") ||
    window.scrollY + tinggiViewport >= tinggiHalaman - 5
      ? "section_5"
      : posisi >= section("section_4")
      ? "section_4"
      : posisi >= section("section_3")
      ? "section_3"
      : posisi >= section("section_2")
      ? "section_2"
      : "section_1";

  halamanAktif.set(posisiAktif);
  showNavbar.set(window.scrollY > navbarBottom);

  if (get(menuTerbuka)) {
    menuTerbuka.set(false);
  }
}
