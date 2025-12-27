<div class="flex h-16 w-[20%] md:h-18 lg:h-20">
	<div class="logo-brand w-fit"></div>
</div>

<style>
	.logo-brand {
		width: 100%;
		height: 100%;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: left;
		transition: background-image 0.2s ease-in-out;
		/* Kondisi DEFAULT: Top Page + Light Mode */
		background-image: url('/light-theme.svg');
	}

	/* 1. Top Page + Dark Mode */
	:global(html.dark) .logo-brand {
		background-image: url('/dark-theme.svg');
	}

	/* 2. Scrolled + Light Mode */
	:global(html.navbar-scrolled) .logo-brand {
		background-image: url('/dark-theme.svg');
	}

	/* 3. Scrolled + Dark Mode */
	:global(html.dark.navbar-scrolled) .logo-brand {
		background-image: url('/light-theme.svg');
	}
</style>
