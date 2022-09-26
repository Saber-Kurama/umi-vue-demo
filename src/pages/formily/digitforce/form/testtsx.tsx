import { defineComponent, h } from "vue";
import { Form } from "@arco-design/web-vue";

export default defineComponent({
  name: "testPage",
  setup() {
    return () => {
      return h(
        Form,
        {},
        {
          default() {
            return (
              <a-form-item field="name" label="Username">
                <a-input placeholder="please enter your username..." />
              </a-form-item>
            );
          },
        }
      );
    };
  },
});
