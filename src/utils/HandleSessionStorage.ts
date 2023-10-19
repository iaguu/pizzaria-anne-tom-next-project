

export const setStorage = (key: string, value: any) => {
  sessionStorage.setItem(key, JSON.stringify(value))
}

export const getStorage = (key: string) => {
  const verify = sessionStorage.getItem(key)

  if (verify) {
    return JSON.parse(sessionStorage.getItem(key) as string)
  }
}
