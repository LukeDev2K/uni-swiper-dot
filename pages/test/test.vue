<template>
	<view>
		<button type="default" @click="openScan">打开扫一扫</button>
		<button type="default" @click="openMiniprogram">拉起小程序</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			openScan: function() {
				uni.scanCode({
					scanType:['qrCode'],
					success: (res) => {
						console.log(JSON.stringify(res))
					},
					fail: (err) => {
						console.error(JSON.stringify(err))
					}
				})
			},
			openMiniprogram: function() {
				
			}
		}
	}
</script>

<style lang="scss">

</style>
