// 该文件主要放置的是icon组件的props，以及一些公共方法
import type { ExtractPropTypes } from "vue"; // ExtractPropTypes是vue内置的一个类型，并接收一个泛型参数，
export const iconProps = {
    size: {
        type: Number,
    },
    color: {
        type: String
    }
};

export type IconProps = ExtractPropTypes<typeof iconProps>; 
/**
 * type IconProps = {} & {
    readonly size?: number | undefined;
    readonly color?: string | undefined;
}
 */