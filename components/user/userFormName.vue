<template>
  <v-text-field
    v-model="setName"
    :counter="max"
    :rules="rules"
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
  data () {
    const max = 30
    return {
      max,
      // バリテーションの配列
      rules: [
        v => !!v || '',
        v => (!!v && max >= v.length) || `${max}文字以内で入力してください`
      ]
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
