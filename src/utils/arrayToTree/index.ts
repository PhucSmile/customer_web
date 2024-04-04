'use client';
import { BaseTreeType, BaseType } from '@/schemas/BaseSchema';
import { checkEqual } from '@/utils/checkEqual';

export const arrayToTree = <T extends BaseType>(
  arr: T[] = [],
  parentId: string | null | undefined = null,
): BaseTreeType<T>[] =>
  arr
    ?.filter((item) => checkEqual(item?.master_id, parentId))
    ?.map((child) => ({
      ...child,
      children: arrayToTree(
        arr?.filter((item) => !checkEqual(item?.master_id, parentId)),
        child?.id,
      ),
    }));

export const treeToArray = <T extends BaseType>(arr: BaseTreeType<T>[] = []) =>
  arr
    ?.map((item) => [
      item,
      ...(item?.children?.map((childItem) => childItem) ?? []),
    ])
    ?.flat();
