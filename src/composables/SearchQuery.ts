import { MaybeRefOrGetter, ref, toValue, watchEffect } from 'vue'

export function useSearchQuery<T>(items: MaybeRefOrGetter<T[]>, searchQuery: MaybeRefOrGetter<string | null>, getter: (item: T) => string) {
  const results = ref<T[]>([])

  watchEffect(() => {
    const searchItems = toValue(items) ?? []
    const query = (toValue(searchQuery) ?? '').trim().toLowerCase().split(/[ ,-]/i)
    // @ts-expect-error: Vue: Type `T[]` is not assignable to type `UnwrapRefSimple<T>[]`. Type 'T' is not assignable to type 'UnwrapRefSimple<T>'.
    results.value = searchItems.filter(item => query.every(value => getter(item).toLowerCase().indexOf(value) !== -1))
  })

  return { results }
}
