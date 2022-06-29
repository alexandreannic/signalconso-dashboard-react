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

type Entries<T> = {
  [K in keyof T]: [K, T[K]]
}[keyof T][]

type _Enum = {[key: string]: any}

export class Enum {
  static readonly entries = <T extends _Enum>(t: T): Entries<T> => {
    return Object.entries(t)
  }

  static readonly keys = <T extends _Enum>(t: T): (keyof T)[] => {
    return Enum.entries(t).map(([key]) => key)
  }

  static readonly values = <T extends _Enum>(t: T): T[keyof T][] => {
    return Object.values(t)
  }
}

export type Map = {
  <A, R>(a: A | undefined, fn: (_: A) => R): R | undefined
  <A, B, R>(a: A | undefined, b: B | undefined, fn: (a: A, b: B) => R): R | undefined
  <A, B, C, R>(a: [A | undefined, B | undefined, C | undefined], fn: (a: A, b: B, c: C) => R): R | undefined
  <A, B, C, D, R>(a: [A | undefined, B | undefined, C | undefined, D | undefined], fn: (a: A, b: B, c: C, d: D) => R):
    | R
    | undefined
}
export const map: Map = (...args: any[]) => {
  const fn = args.pop()
  return args.every(_ => _ !== undefined) ? fn(...args) : undefined
}

/**
 * Map a function returning a Promise without having to redefined his parameters
 */
export const mapPromise =
  <F extends (...args: any[]) => Promise<any>, X>({
    promise,
    mapThen = _ => _,
    mapCatch = _ => Promise.reject(_),
  }: {
    promise: F
    mapThen?: (_: PromiseFnResult<F>) => X
    mapCatch?: (_: any) => any
  }) =>
  (...args: Parameters<F>): Promise<X> => {
    return promise(...args)
      .then(mapThen)
      .catch(mapCatch)
  }
