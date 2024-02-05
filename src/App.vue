<template>
  <div class="row justify-end q-pb-sm">
    <q-btn dense icon="add" round color="positive" @click="addMember" />
  </div>
  <div class="row q-col-gutter-lg">
    <div v-for="m in members" :key="m" class="col-6 col-md-4">
      <Member :mid="m.mid" :name="m.name" :team="m.team" :contact="m.contact" />
    </div>
  </div>
</template>

<script setup>
import { reactive, defineAsyncComponent } from "vue";
import { uid } from "quasar";

const members = reactive([
  { mid: uid(), name: "송가영", team: "개발팀", contact: "010-0000-0000" },
  { mid: uid(), name: "아이유", team: "개발팀", contact: "010-0000-0000" },
  { mid: uid(), name: "뷔", team: "개발팀", contact: "010-0000-0000" },
]);

const Member = defineAsyncComponent(() => import("./components/Member.vue"));

const addMember = () => {
  members.unshift({ mid: uid(), name: "", team: "", contact: "" });
};
</script>
