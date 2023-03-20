import {FC} from "react";
import {Item} from "./item/Item";

type PropsType = {
    rowSkeleton: number
    columnSkeleton: number
}
export const SkeletonTable: FC<PropsType> = ({rowSkeleton,columnSkeleton}) => {
    const rowSkeletonArr = Array.from(Array(rowSkeleton).keys());
    const columnSkeletonArr = Array.from(Array(columnSkeleton).keys());
    return <tbody>
    {rowSkeletonArr.map((i) => {
        return (
            <Item key={i} columnSkeletonArr={columnSkeletonArr}/>
        );
    })}
    </tbody>
}