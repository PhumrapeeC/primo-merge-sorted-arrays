export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
  const result: number[] = [];

  let i = 0, j = 0, k = collection_3.length - 1;

  while (i < collection_1.length || j < collection_2.length || k >= 0) {
    const candidates: number[] = [];

    if (i < collection_1.length) candidates.push(collection_1[i]);
    if (j < collection_2.length) candidates.push(collection_2[j]);
    if (k >= 0) candidates.push(collection_3[k]);

    let min = Math.min(...candidates);

    if (i < collection_1.length && collection_1[i] === min) {
      result.push(collection_1[i++]);
    } else if (j < collection_2.length && collection_2[j] === min) {
      result.push(collection_2[j++]);
    } else if (k >= 0 && collection_3[k] === min) {
      result.push(collection_3[k--]);
    }
  }

  return result;
}
