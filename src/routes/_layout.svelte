<script>
	import Nav from '../components/Nav.svelte';
	import Sidebar from '../components/Sidebar.svelte';
	export let segment;

</script>

<style>

</style>

<div class="grid grid-cols-2 ">
	<div class="col-start-1  col-span-1 pl-12 grid grid-cols-3">

		<div class="flex flex-col  col-start-1 col-span-1 align-middle content-center pt-10	">
			<span class="vertical-line"></span>
			<ul class="flex-col flex content-center pt-64">

				<li><img src="/image.svg" alt="new"/></li>
				<br/>
<li class="pl-3"><img class="w-12 " src="/github64.png" alt="now"/></li>
				<br/>

				<li class="pl-3"><img class="w-12" src="/gmail-vector-png--1600.png" alt="fer"/></li>
			</ul>

		</div>
	<Sidebar />
</div>
	<main class="col-start-2 col-span-2 pl-20 pt-20 "  >

		<slot></slot>
	</main>
</div>
