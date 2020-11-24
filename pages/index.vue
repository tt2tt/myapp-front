<template>
  <div>
    <!-- イベントの追加 getMsgメソッドの実行 -->
    <button
      type="button"
      name="button"
      @click="getMsg"
    >
      RailsからAPIを取得する
    </button>
    <div
      v-for="(msg, i) in msgs"
      :key="i"
    >
      {{ msg }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // データの定義
      msgs: []
    }
  },
  methods: {
    // API通信の実行
    getMsg () {
      // 成功時の処理
      this.$axios.$get('/api/v1/hello')
      // msgs配列に返り値を追加
        .then(res => this.msgs.push(res))
    }
  }
}
</script>
