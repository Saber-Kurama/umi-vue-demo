<template>
  <FFrom :model="form" :style="{ width: '600px' }" @submit="handleSubmit">
    <a-form-item field="name" label="Username">
      <a-input
        v-model="form.name"
        placeholder="please enter your username..."
      />
    </a-form-item>
    <a-form-item field="post" label="Post">
      <a-input v-model="form.post" placeholder="please enter your post..." />
    </a-form-item>
    <a-form-item field="isRead">
      <a-checkbox v-model="form.isRead"> I have read the manual </a-checkbox>
    </a-form-item>
    <a-form-item>
      <a-button html-type="submit">Submit</a-button>
    </a-form-item>
  </FFrom>
  {{ form }}
</template>

<script setup>
import { reactive } from "vue";
import { Form } from "@dangojs/digitforce-ui";
import { Form as AFrom } from "@arco-design/web-vue";
// import { Form as FFrom } from "@dangojs/formily-digitforce-ui";
import { transformComponent } from "@/utils/transform-component";

// console.log("Form", Form);
const CForm = transformComponent(AFrom);

const form = reactive({
  name: "",
  post: "",
  isRead: false,
});
const handleSubmit = (data) => {
  console.log(data);
};
</script>
