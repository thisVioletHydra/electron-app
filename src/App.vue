<template>
  <div class="box">
    <div class="group">
      <h4 class="title">
        [poe2] auto update: let_me_in_filter
      </h4>
      <p class="desc">
        прога следит за обновлением фильтра и качает его в папку с пое
      </p>
    </div>
    <div class="group gap">
      <div class="item">
        status: {{ status }}
      </div>
      <div class="versionbox">
        <div class="item">
          filter version: {{ filterVersion }}
        </div>
        <div class="item">
          app version: {{ appVersion }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const status = ref('Idle');
  const appVersion = ref('1111');
  const filterVersion = ref('2222');

  onMounted(async () => {
    status.value = await (await globalThis.electron.subscribe())();
  });
</script>

<style lang="postcss" module>
.gap {
  gap: 1rem;
}
.title {
  margin: 0;
}
.desc {
  font-size: 12px;
  margin: 0;
}
.box {
  display: grid;
  grid: auto / 480px;
  gap: 1rem;
}
.group {
  display: grid;
  grid: auto / 1fr;
  justify-content: start;
}
.item {
  /* border: 1px solid green; */
  justify-self: start;
}
.versionbox {
  display: grid;
  grid: auto / 1fr 1fr;
  gap: 1rem;
}
</style>
