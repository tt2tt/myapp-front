<template>
  <v-text-field
    v-model="setName"
    label="ユーザー名を入力"
    placeholder="あなたの表示名"
    outlined
  />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    // データの受信と送信を切り分ける
    setName: {
      // 受信
      get () { return this.name },
      // 送信
      set (newVal) { return this.$emit('update:name', newVal) }
    }
  }
}
</script>
