import React, {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useState
} from 'react'

interface FormDataProvider {
  name?: string
  phone?: string
  email?: string
  address?: {
    street: string
    number: string
    neighborhood: string
    city: string
    state: string
    zipCode: string
  }
}

interface AdditionalProps {
  id: string
  name: string
  price: number
  qtd: number
  qtdMax: number
  img: string
}

interface ChallengeContextData {
  cart: number
  setCart: Dispatch<React.SetStateAction<number>>
  size: { price: number; size: string }
  setSize: Dispatch<React.SetStateAction<{ price: number; size: string }>>
  formData: FormDataProvider
  setFormData: Dispatch<React.SetStateAction<FormDataProvider>>
  additionals: AdditionalProps[]
  setAdditionals: Dispatch<React.SetStateAction<AdditionalProps[]>>
  flavor: any
  setFlavor: Dispatch<React.SetStateAction<any>>
  hasNetwork: boolean
  setHasNetwork: Dispatch<React.SetStateAction<boolean>>
}

interface DataStorageProps {
  children: ReactNode
}

export const DataContext = createContext({} as ChallengeContextData)

export const DataStorage = ({ children }: DataStorageProps) => {
  const [flavor, setFlavor] = useState([])

  const [additionals, setAdditionals] = useState<AdditionalProps[]>([])

  const [size, setSize] = useState({ price: 0, size: '' })

  const [cart, setCart] = useState(0)

  const [formData, setFormData] = useState({})

  const [hasNetwork, setHasNetwork] = useState(true)

  useEffect(() => {
    window.addEventListener('load', () => {
      setHasNetwork(navigator.onLine)

      window.addEventListener('online', () => setHasNetwork(true))

      window.addEventListener('offline', () => setHasNetwork(false))
    })
  }, [])

  return (
    <DataContext.Provider
      value={{
        cart,
        setCart,
        size,
        setSize,

        formData,
        setFormData,

        additionals,
        setAdditionals,

        flavor,
        setFlavor,

        hasNetwork,
        setHasNetwork
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
