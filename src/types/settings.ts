interface SentIntentAndroid {
  action: string;
  extras?: Array<{ key: string; value: string | number | boolean }>;
}

export type { SentIntentAndroid };
