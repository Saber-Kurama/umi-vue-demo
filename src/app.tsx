import ElementPlus from "element-plus";
import ArcoVue from "@arco-design/web-vue";
import ArcoVueIcon from "@arco-design/web-vue/es/icon";

export function onAppCreated({ app }: any) {
  app.use(ElementPlus);
  app.use(ArcoVue, {});
  app.use(ArcoVueIcon);
}
