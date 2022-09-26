import type { Component } from "vue";
import { defineComponent, h } from "vue";
import { merge } from "lodash-es";

// todo: 如何接入 vitetest

// 仅仅只是 修改默认的 props 和 增加或者修改默认slots
export const transformComponent = <T extends Record<string, any>>(
  tag: any,
  defaultProps?: Partial<T>,
  defaultSlots?: any | ((props: Partial<T>) => any)
): Component<T> => {
  return defineComponent({
    setup(props, context) {
      let { attrs, slots } = context;
      return () => {
        let data = {
          ...attrs,
        };
        if (defaultProps) {
          data = merge(defaultProps, attrs);
        }
        if (defaultSlots) {
          if (typeof defaultSlots === "function") {
            slots = merge(defaultSlots(data, context), slots);
          } else {
            slots = merge(defaultSlots, slots);
          }
        }
        console.log("data", data);
        return h(tag, data, slots);
      };
    },
  });
};
