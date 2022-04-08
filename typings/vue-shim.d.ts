// vue文件的类型声明
declare module "*.vue" {
    import type { defineComponent } from "vue";
    const component: defineComponent<{}, {}, any>;
    export default component
}