import { isEmpty } from './string';

function mergeObjects(...data: Array<unknown>): unknown {
  return Object.assign({}, ...data);
}

function structuredClone(object: unknown): unknown {
  return JSON.parse(JSON.stringify(object));
}

function trimObjectValues(data: unknown): Record<string, unknown> {
  const value: Record<string, unknown> = data as Record<string, unknown>;

  Object.keys(value).forEach((key) => {
    switch (typeof value[key]) {
      case 'string':
        value[key] = isEmpty(value[key]) ? '' : value[key]?.trim();
        break;

      case 'object':
        value[key] = trimObjectValues(value[key]);
        break;

      default:
        break;
    }
  });

  return value;
}

export { mergeObjects, structuredClone, trimObjectValues };
