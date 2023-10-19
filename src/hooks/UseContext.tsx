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
  qtd: number
  qtdMax: number,
  price: number,
  img: string
}

interface ChallengeContextData {
  cart: number
  setCart: Dispatch<React.SetStateAction<number>>
  size: { size: string }
  setSize: Dispatch<React.SetStateAction<{ size: string }>>
  formData: FormDataProvider
  setFormData: Dispatch<React.SetStateAction<FormDataProvider>>
  additionals: AdditionalProps[]
  setAdditionals: Dispatch<React.SetStateAction<AdditionalProps[]>>
  flavor: any
  setFlavor: Dispatch<React.SetStateAction<any>>
  hasNetwork: boolean
  setHasNetwork: Dispatch<React.SetStateAction<boolean>>
  price: number; // Adicione a propriedade price ao contexto
  setPrice: Dispatch<React.SetStateAction<number>>; // Adicione o setter para a propriedade price
  already: boolean; // Adicione a propriedade price ao contexto
  setAlready: Dispatch<React.SetStateAction<boolean>>; // Adicione o setter para a propriedade price

}

interface DataStorageProps {
  children: ReactNode
}

export const DataContext = createContext({} as ChallengeContextData)

export const DataStorage = ({ children }: DataStorageProps) => {

  const [flavor, setFlavor] = useState([])

  const [price, setPrice] = useState(0); 

  const [already, setAlready] = useState(false); 

  const [additionals, setAdditionals] = useState<AdditionalProps[]>([])

  const [size, setSize] = useState({  size: '' })

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

        price,
        setPrice,

        already,
        setAlready,

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
