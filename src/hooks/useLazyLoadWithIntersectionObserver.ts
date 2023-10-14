import { RefObject, useEffect, useState } from 'react'

export const useLazyLoadWithIntersectionObserver = (
  ref: RefObject<HTMLDivElement>,
  { distancePXWindowCallComponent }: { distancePXWindowCallComponent: number }
) => {
  const [showComponent, setShowComponent] = useState(false)

  useEffect(() => {
    try {
      const callBackObserver = (entries: any[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            observer.disconnect()
            setShowComponent(true)
          }
        })
      }

      const options = {
        root: window.document,
        rootMargin: `0px 0px ${distancePXWindowCallComponent}px 0px`
      }

      const observer = new IntersectionObserver(callBackObserver, options)
      !!ref.current && observer.observe(ref.current)
    } catch (e) {
      console.log(e)
      setShowComponent(true)
    }
  }, [distancePXWindowCallComponent, ref])

  return { showComponent }
}
