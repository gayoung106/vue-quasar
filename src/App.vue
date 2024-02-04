<template>
  <div class="row">
    <q-card v-for="c in 10" :key="c">
      <div class="text-center bg-primary text-white">member</div>
      <q-card-section>
        <div>송가영</div>
        <div>개발팀</div>
        <div>000-0000-0000</div>
      </q-card-section>
    </q-card>
  </div>
</template>
