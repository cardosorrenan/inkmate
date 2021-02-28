<template>
  <div>
    <b-toast :id='`my-toast-${id}`' variant="danger" solid>
      <template #toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <b-img blank blank-color="#ff5555" class="mr-2" width="12" height="12"></b-img>
          <strong class="mr-auto">Notice!</strong>
        </div>
      </template>
    </b-toast>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: '',
      id: 0
    }
  },
  methods: {
    createToast (title, message, type) {
      console.log(type === 'danger')
      const time = type === 'danger' ? 3000 : 750
      this.$bvToast.toast(message, {
        title,
        solid: true,
        variant: type,
        autoHideDelay: time
      })
    }
  }
}
</script>
