<!-- eslint-disable vue/html-self-closing -->
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
    <div class="group content">
      <div class="item">
        status: {{ status }}
      </div>
      <div class="item">
        path: <span class="subpath"> {{ statusPath }}</span>
      </div>
      <div class="item">
        autoUpdater: {{ autoUpdater }}
      </div>
      <div class="versionbox">
        <div class="item">
          filter version: {{ filterVersion }}
        </div>
        <div class="item">
          app version: {{ appVersion }}
        </div>
        <div class="item">
          last fetch PoeTrade2: {{ poeTrade2 }}
        </div>
        <button class="button" @click="handlerClick">
          debugger
        </button>
      </div>
    </div>

    <div v-if="eventCatch.length > 0" class="group info">
      <template v-for="(f, dex) in eventCatch" :key="dex">
        <div class="icon alert" v-html="alert"></div>
        <p class="eventText">
          {{ f }}
        </p>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
  import alert from '~~assets/alert.svg?url&raw';

  const status = ref('Idle');
  const statusPath = ref('');
  const autoUpdater = ref('off');
  const appVersion = ref('...');
  const filterVersion = ref('...');
  const poeTrade2 = ref('off');
  const eventCatch = ref<string[]>([]);

  type ApiInvoke<T extends string = string> = {
    success: boolean
    data: T
  };

  async function run() {
    const answer = await window.api.invoke('test');

    if (answer.success === false) {
      const hasError = eventCatch.value.some((f) => String(answer.data).includes(f));
      console.log(`[LOG] hasError`, `<${typeof hasError}>`, hasError);
      hasError === false
        ? eventCatch.value.push(String(answer.data))
        : undefined;
    } else {
      status.value = answer.data;
      statusPath.value = answer.filterPath;
    }

    const checkVersionFilter = await window.api.invoke<Date>('checkVersionFilter');
    filterVersion.value = String(
      new Date(String(checkVersionFilter.data),
      ).toLocaleString('ru-RU'),
    );
    const checkAppVersion = await window.api.invoke('checkAppVersion');
    appVersion.value = checkAppVersion.data;
  }

  async function handlerClick() {
    status.value = 'Clicked...';
    await run();
  }

  onMounted(async () => {
    status.value = 'Loading...';
    await run();
  });
</script>

<style lang="postcss" module>
.subpath {
  font-size: 10px;
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
  grid: auto 1fr auto / 30rem;
  gap: 1rem;
  height: 90vh;
  align-items: start;
}

.group {
  display: grid;
  grid: auto / 1fr;
  justify-content: start;
}
.item {
  text-align: start;
  justify-self: start;
}
.versionbox {
  display: grid;
  grid: auto / 1fr 1fr;
  gap: 1rem;
}
.button {
  outline-width: 0;
  background-color: hsla(213, 18%, 12%, 1);
  transition:
    transform ease-out 0.123s,
    background-color ease 0.123s;

  &:hover {
    cursor: pointer;
    border-color: transparent;
    background-color: hsla(213, 18%, 10%, 1);
  }
  &:active {
    cursor: pointer;
    transform: scale(0.98);
  }
  &:focus {
    outline: none;
  }
}
.alert {
  width: 1rem;
  height: 1rem;
  color: hsla(3, 83%, 57%, 1);
  display: grid;
  place-items: center;
}
.info {
  background-color: hsla(213, 18%, 12%, 1);
  padding: 1rem;
  border: 1px solid;
  border-color: hsla(213, 18%, 10%, 1);
  border-radius: 4px;
  display: grid;
  grid: auto / auto 1fr;
  align-items: center;
  gap: 1rem;
}
.eventText {
  text-align: left;
  margin: 0;
  padding: 0;
  font-size: 12px;
}
.content {
  display: grid;
  grid: auto / 1fr;
  align-items: start;
  gap: 1rem;
}
</style>
