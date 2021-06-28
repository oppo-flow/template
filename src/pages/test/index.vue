<template>
  <div>
    <button @click="test">测试</button>
    <div>测试页面</div>
    <div>{{ message }}</div>
    <div>{{ $t('hi.hi') }}</div>
    <div>{{ $t('hello') }}</div>
    <div class="block">xsdfsd</div>
  </div>
</template>
<i18n>
	{
	"en": {
	"hello": "hello world!"
	},
	"zh": {
	"hello": "你好,世界！"
	}
	}
</i18n>
<script>
import { API_GROUP_CREAT } from '@/api/user'
export default {
  created() {},
  computed: {},
  methods: {
    test() {
      console.log(this.$i18n)
      let locale = this.$root.$i18n.locale
      locale === 'zh' ? (this.$root.$i18n.locale = 'en') : (this.$root.$i18n.locale = 'zh')
    },
    getUser() {
      this.$http(API_GROUP_CREAT)
    },
    changeTheme() {}
  },
  props: {
    message: {
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
.demo {
  height: 500px; /*no*/
  width: 400px;
  font-size: 30px;
}
.hello {
  height: 500px;
  width: 400px;
  font-size: 30px;
}
.block {
  width: 500px;
  height: 500px;
}
</style>
