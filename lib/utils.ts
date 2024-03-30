import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function delay(durations: number) {
  return new Promise((resolve, reject) => {
    if (!durations) {
      reject('Provide durations ')
    } else {
      setTimeout(() => {
        resolve(durations)
      }, durations)
    }
  })
}
