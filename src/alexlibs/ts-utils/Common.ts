/**
 * Functional for loop.
 * mapFor(n, callback)
 * is equivalent to
 * [...new Array(n)].map((_, i) => callback(i))
 * with better performance
 */
export const mapFor = <T>(n: number, callback: (i: number) => T): T[] => {
  const result: T[] = new Array(n)
  for (let i = 0; i < n; i++) {
    result[i] = callback(i)
  }
  return result
}

type PromiseReturn<T> = T extends PromiseLike<infer U> ? U : T

export type PromiseFnResult<T extends (...args: any[]) => Promise<object>> = PromiseReturn<ReturnType<T>>
