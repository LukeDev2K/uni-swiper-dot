<template>
	<view>
		<button class="btn-test" @click="openScan">打开扫一扫</button>
		<button class="btn-test" @click="openMiniprogram">拉起小程序</button>
		<text class="qr-content">{{qrContent}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				qrContent:''
			};
		},
		methods:{
			openScan: function() {
				uni.scanCode({
					scanType:['qrCode'],
					success: (res) => {
						console.log(JSON.stringify(res))
						this.qrContent = res.result
					},
					fail: (err) => {
						console.error(JSON.stringify(err))
						this.qrContent = '扫码失败==>' + JSON.stringify(err)
					}
				})
			},
			openMiniprogram: function() {
				let shares = {}  
				plus.share.getServices(item => {  
				    for(let i in item) {  
				        const t = item[i]  
				        shares[t.id] = t  
				    }  
				    shares['weixin'].launchMiniProgram({  
				        id: 'gh_8c3933c43727', // 小程序原始ID  
				        type: 0, // 正式版:0，测试版:1，体验版:2  
				        path: 'pages/index/index'  
				    })  
				    console.log(shares)  
				},err => {  
				    console.log(err.message)  
				}) 
			}
		}
	}
</script>

<style lang="scss">
	.btn-test {
		margin-bottom: 40rpx;
	}
	
	.qr-content {
		width: 100%;
	}
</style>
