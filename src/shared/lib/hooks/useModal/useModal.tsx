import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

interface UseModalProps {
  onClose?: () => void
  isOpen?: boolean
  lazy?: boolean
  animationDelay: number
}

export function useModal(props: UseModalProps) {
  const { animationDelay, isOpen, onClose } = props

  const [isClosing, setIsClosing] = useState(false)
  const [isMounting, setIsMounting] = useState(false)
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

  useEffect(() => {
    if (isOpen) {
      setIsMounting(true)
    }
  }, [isOpen])

  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, animationDelay)
    }
  }, [onClose])

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
      }
    },
    [close],
  )

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  return {
    isClosing,
    isMounting,
    close,
  }
}
