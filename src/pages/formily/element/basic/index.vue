<template>
  <FormProvider :form="form">
    <!-- <Field
      name="input"
      title="输入框"
      :decorator="[FormItem]"
      :component="[Input]"
    />
    <Field
      name="textarea"
      title="文本框"
      :decorator="[FormItem]"
      :component="[Input.TextArea]"
    />
    <Submit @submit="log">提交</Submit> -->
    <SchemaField :schema="schema" />
  </FormProvider>
</template>

<script lang="ts" setup>
import { createForm } from "@formily/core";
import { FormProvider, Field, createSchemaField } from "@formily/vue";
import {
  FormItem,
  FormLayout,
  Input,
  Select,
  Submit,
} from "@formily/element-plus";
// import "element-plus/theme-chalk/index.css";
import "element-plus/dist/index.css";

const form = createForm();
const schema = {
  type: "object",
  properties: {
    layout: {
      type: "void",
      "x-component": "FormLayout",
      "x-component-props": {
        labelCol: 6,
        wrapperCol: 10,
        layout: "vertical",
      },
      properties: {
        input: {
          type: "string",
          title: "输入框",
          required: true,
          "x-decorator": "FormItem",
          "x-decorator-props": {
            tooltip: "123",
          },
          "x-component": "Input",
        },
        select: {
          type: "string",
          title: "选择框",
          required: true,
          "x-decorator": "FormItem",
          "x-component": "Select",
        },
      },
    },
  },
};

const { SchemaField } = createSchemaField({
  components: {
    FormLayout,
    FormItem,
    Input,
    Select,
  },
});
const log = (value) => {
  console.log(value);
};
</script>
