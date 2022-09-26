<template>
  <BForm :model="form" :style="{ width: '600px' }" @submit="handleSubmit">
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
  </BForm>
  {{ form }}
</template>

<script>
import { reactive } from "vue";
import { Form } from "@dangojs/digitforce-ui";
import { Form as AFrom } from "@arco-design/web-vue";
import { transformComponent } from "@/utils/transform-component";

console.log("Form", Form);
const CForm = transformComponent(AFrom);
export default {
  components: {
    BForm: Form,
    CForm: CForm,
  },

  setup() {
    const form = reactive({
      name: "",
      post: "",
      isRead: false,
    });
    const handleSubmit = (data) => {
      console.log(data);
    };

    return {
      form,
      handleSubmit,
    };
  },
};
</script>
