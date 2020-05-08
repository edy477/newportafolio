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

			<ul class="flex-col flex content-center pt-64">

				<li class="pl-3"><a href="https:/www.linkedin.com/in/jose-eduardo-gomez-perez-4a3b8963" target="_blank"><img src="/image.svg" alt="new"/></a></li>
				<br/>
				<li class="pl-4"><a href="https://github.com/edy477" target="_blank"><img class="w-12" src="/github64.png" alt="now"/></a></li>
				<br/>

				<li class="pl-4"><a href="mailto:edy47@mesoamericana.edu.gt"><img class="w-12" src="/gmail-vector-png--1600.png" alt="fer"/></a></li>

			</ul>

		</div>
	<Sidebar />
</div>
	<main class="col-start-2 col-span-2 pl-20 pt-20 "  >

		<slot></slot>
	</main>
</div>
