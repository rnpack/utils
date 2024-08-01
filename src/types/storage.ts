interface StorageSetArgsType {
  key: string;
  value: unknown;
}

interface StorageGetArgsType {
  key: string;
}

interface StorageRemoveArgsType {
  key: string;
}

interface StorageMergeArgsType {
  key: string;
  value: unknown;
}

export type {
  StorageSetArgsType,
  StorageGetArgsType,
  StorageRemoveArgsType,
  StorageMergeArgsType,
};
