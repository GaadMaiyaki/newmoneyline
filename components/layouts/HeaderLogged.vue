<template>
	<b-navbar toggleable="lg" type="light" variant="light">
		<div class="container-fluid">
			<b-navbar-brand href="#">
				<img src="/logo.png" width="200" alt="Kitten">
			</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					<b-navbar-nav>
						<b-nav-item to="/">Home</b-nav-item>
						<b-nav-item to="/about-us">About Us</b-nav-item>
						<b-nav-item to="/faq">FAQ</b-nav-item>
						<b-nav-item to="/contact">Contact</b-nav-item>
						<b-link to="/app/admin/users">
							<b-button variant="primary">Manage Users</b-button>
						</b-link>
						<!-- <b-link to="/login">
							<b-button variant="primary">Manage Loans</b-button>
						</b-link> -->
						<b-link to="/account/login">
							<b-button variant="secondary">Logout</b-button>
						</b-link>
						<!-- <b-button variant="secondary">Login</b-button> -->
					</b-navbar-nav>

					<!-- <b-nav-item-dropdown text="Lang" right>
						<b-dropdown-item href="#">EN</b-dropdown-item>
						<b-dropdown-item href="#">ES</b-dropdown-item>
						<b-dropdown-item href="#">RU</b-dropdown-item>
						<b-dropdown-item href="#">FA</b-dropdown-item>
					</b-nav-item-dropdown>

					<b-nav-item-dropdown right>
					Using 'button-content' slot-->
					<!-- <template slot="button-content">
							<em>User</em>
						</template>
						<b-dropdown-item href="#">Profile</b-dropdown-item>
						<b-dropdown-item href="#">Sign Out</b-dropdown-item>
					</b-nav-item-dropdown>-->
				</b-navbar-nav>
			</b-collapse>
		</div>
	</b-navbar>
</template>

<script>
export default {
	name: "Header"
};
</script>


<style scoped>
.navbar {
	padding: 1rem 1rem;
}

.bg-light {
	background-color: #ffffff !important;
	box-shadow: 0px 1px 9px rgba(193, 193, 193, 0.1);
}
</style>
