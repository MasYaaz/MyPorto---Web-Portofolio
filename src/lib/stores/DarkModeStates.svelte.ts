import { browser } from '$app/environment';

class Theme {
	// Inisialisasi langsung dengan nilai dari localStorage jika ada
	darkMode = $state(browser ? localStorage.theme === 'dark' : false);

	constructor() {
		if (browser) {
			$effect.root(() => {
				$effect(() => {
					document.documentElement.classList.toggle('dark', this.darkMode);
					localStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
				});
			});
		}
	}

	toggleDark = () => {
		this.darkMode = !this.darkMode;
	};
}

export const theme = new Theme();
