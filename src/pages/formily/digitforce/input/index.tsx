import { defineComponent } from "vue";
import { Select } from "@dangojs/digitforce-ui";

export default defineComponent({
  name: "InputPage",
  setup(props) {
    return () => {
      return (
        <div>
          <Select placeholder="Please select ..."></Select>
        </div>
      );
    };
  },
});
