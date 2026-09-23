import { useCallback, useSyncExternalStore } from 'react'

const STORAGE_KEY = 'clothing-store-wishlist'

const listeners = new Set<() => void>()
let ids: string[] = readStored()

function readStored(): string[] {
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
    return Array.isArray(parsed)
      ? parsed.filter((id): id is string => typeof id === 'string')
      : []
  } catch {
    return []
  }
}

function setIds(next: string[]) {
  ids = next
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  } catch {
    // ignore
  }
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getSnapshot() {
  return ids
}

export function useWishlist() {
  const current = useSyncExternalStore(subscribe, getSnapshot)

  const has = useCallback((id: string) => current.includes(id), [current])

  const toggle = useCallback((id: string) => {
    setIds(ids.includes(id) ? ids.filter((item) => item !== id) : [...ids, id])
  }, [])

  return { ids: current, count: current.length, has, toggle }
}
