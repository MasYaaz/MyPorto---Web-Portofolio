import { browser } from '$app/environment';

class UIStates {
	halamanAktif = $state('section_1');
	menuMobileShow = $state(false);
	firstPageNavbarMode = $state(browser ? window.scrollY <= 10 : true);

	constructor() {
		if (browser) {
			// Root effect memungkinkan logic ini jalan di luar komponen .svelte
			$effect.root(() => {
				$effect(() => {
					// Setiap kali firstPageNavbarMode berubah, class di <html> ikut berubah
					document.documentElement.classList.toggle('navbar-scrolled', !this.firstPageNavbarMode);
				});
			});
		}
	}

	toggleMenuMobile = () => {
		this.menuMobileShow = !this.menuMobileShow;
	};

	scrollToSection = (id: string) => {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' });
		}
	};

	handleScroll = () => {
		const offset = 100;
		const posisi = window.scrollY + offset;
		const tinggiHalaman = document.documentElement.scrollHeight;
		const tinggiViewport = window.innerHeight;

		const getSectionOffset = (id: string) => document.getElementById(id)?.offsetTop ?? 0;

		this.firstPageNavbarMode = window.scrollY <= 10;

		// Logika penentuan section aktif
		const posisiAktif =
			posisi >= getSectionOffset('section_5') ||
			window.scrollY + tinggiViewport >= tinggiHalaman - 5
				? 'section_5'
				: posisi >= getSectionOffset('section_4')
					? 'section_4'
					: posisi >= getSectionOffset('section_3')
						? 'section_3'
						: posisi >= getSectionOffset('section_2')
							? 'section_2'
							: 'section_1';

		// Update state secara langsung (tanpa .set)
		this.halamanAktif = posisiAktif;

		if (this.menuMobileShow) {
			this.menuMobileShow = false;
		}
	};
}

export const ui = new UIStates();
