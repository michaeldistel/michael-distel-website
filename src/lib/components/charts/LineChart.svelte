<script lang="ts">
	import { onMount } from 'svelte';
	import { Chart, registerables } from 'chart.js';

	export let data: any;
	export let options: any = {};
	export let height: number = 300;
	export let width: number = 600;

	let canvas: HTMLCanvasElement;
	let chart: Chart;

	// Register Chart.js components
	Chart.register(...registerables);

	onMount(() => {
		if (canvas) {
			const ctx = canvas.getContext('2d');
			if (ctx) {
				chart = new Chart(ctx, {
					type: 'line',
					data,
					options: {
						responsive: true,
						maintainAspectRatio: false,
						plugins: {
							legend: {
								position: 'bottom',
								labels: {
									color: '#9ca3af',
									font: {
										size: 12
									},
									usePointStyle: true,
									padding: 20
								}
							}
						},
						scales: {
							x: {
								grid: {
									color: '#374151',
									lineWidth: 1
								},
								ticks: {
									color: '#9ca3af',
									font: {
										size: 11
									}
								}
							},
							y: {
								grid: {
									color: '#374151',
									lineWidth: 1
								},
								ticks: {
									color: '#9ca3af',
									font: {
										size: 11
									},
									callback: function (value) {
										const num = typeof value === 'string' ? Number(value) : value;
										return num >= 1000 ? num / 1000 + 'k' : num;
									}
								}
							}
						},
						...options
					}
				});
			}
		}

		return () => {
			if (chart) {
				chart.destroy();
			}
		};
	});

	// Reactive update when data changes
	$: if (chart && data) {
		chart.data = data;
		chart.update();
	}
</script>

<div class="w-full" style="height: {height}px; max-width: {width}px;">
	<canvas bind:this={canvas}></canvas>
</div>
