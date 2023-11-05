import { useContext, useEffect } from 'react';
import * as S from 'components/Flavor/styles';
import { DataContext } from 'hooks/UseContext';
import * as C from 'components/BtnNext';
import { getStorage, setStorage } from 'utils/HandleSessionStorage';
import { useCart } from 'hooks/UseCart';

interface FlavorProps {
  data: [
    {
      id: string;
      img: string;
      ingredients: string;
      name: string;
      points: number;
      price: number;
      recommendationDay: boolean;
      checked: boolean
    }
  ];
}
 
export const Flavor = ({ data }: FlavorProps) => {

  
  const { flavor, setFlavor, price, setPrice, setCart } = useContext(DataContext);

  const ConvertToPrice = (price: number) => useCart(price)

  useEffect(() => getStorage('flavor') && setFlavor(getStorage('flavor')),[setFlavor])

  useEffect(() => setStorage('flavor', flavor), [flavor])
  useEffect(() => setStorage('price', price), [price])





  const getFlavorById = (id: string, data: [{ id: string }]) => {
    return data.find(el => el.id === id)
  }


  const changeFlavorChecked = (id: string, price: number) => {
    const currentFlavorClicked = getFlavorById(id, data);
    const existingFlavor = [...flavor];
  
    if (existingFlavor.length === 2) {
      if (existingFlavor.includes(currentFlavorClicked)) {
        const remainingFlavors = existingFlavor.filter(flavor => flavor !== currentFlavorClicked);
        setFlavor(remainingFlavors);
  
        if (remainingFlavors.length === 1) {
          setPrice(remainingFlavors[0].price);
          setCart(remainingFlavors[0].price);
        } else {
          setPrice(0);
          setCart(0);
        }
      } else {
        alert("Limite de sabores atingido, escolha apenas 2 sabores para pizza 1/2");
      }
    } else {
      const flavorExists = existingFlavor.find(flavor => flavor === currentFlavorClicked);
  
      if (flavorExists) {
        const updatedFlavors = existingFlavor.filter(flavor => flavor !== currentFlavorClicked);
        setFlavor(updatedFlavors);
  
        if (updatedFlavors.length === 1) {
          setPrice(updatedFlavors[0].price);
          setCart(updatedFlavors[0].price);
        } else {
          setPrice(0);
          setCart(0);
        }
      } else {
        if (existingFlavor.length === 1) {
          const maxPrice = Math.max(existingFlavor[0].price, price);
          setPrice(maxPrice);
          setCart(maxPrice);
          setFlavor([...existingFlavor, currentFlavorClicked]);
        } else {
          setPrice(price);
          setCart(price);
          setFlavor([...existingFlavor, currentFlavorClicked]);
        }
      }
    }
  };
  

  return (
    <>
      <S.TitleComponent>Sabores</S.TitleComponent>
      <S.ContainerCard>
        {data.map(el => {
          
          const checked = !!flavor.find((flavorItem: { id: string }) => flavorItem.id === el.id);

          return (
            <S.Card key={el.id} verifyCheck={checked}>
              <S.ContainerCheckbox verifyCheck={checked}>
                <img
                  src="https://annetom.com/img/icons/checkbox.svg"
                  width="18"
                  height="17"
                  alt="Checkbox"
                />
                <img
                  src="https://annetom.com/img/icons/checkbox-checked.svg"
                  width="18"
                  height="18"
                  alt="Checkbox"
                />
                <input
                  type="checkbox"
                  onClick={() => changeFlavorChecked(el.id, el.price)}
                  defaultChecked={checked}
                />
              </S.ContainerCheckbox>
              <S.ContainerImg>
                <img
                  src={`https://annetom.com/api-img/pizzas/${el.img}.jpg`}
                  alt="Imagem de uma pizza"
                />
              </S.ContainerImg>
              <S.ContainerInfo bonus={el.recommendationDay}>
                <S.Title>
                  <b>PIZZA {el.name}</b> {el.recommendationDay && <em>(*Recomendação do dia)</em>}
                </S.Title>
                <S.ContentInfo>
                  <S.SubTitle>Ingredientes:</S.SubTitle>
                  <S.Text>{el.ingredients}</S.Text>
                  <br />
                  <S.Text>{ConvertToPrice(el.price)}</S.Text>
                </S.ContentInfo>
              </S.ContainerInfo>
            </S.Card>
          )
        })}
        <S.WrapperBtn>
          <C.BtnNext text="Voltar" route={'/'} />
          <S.Space />
          <C.BtnNext
            route={'/etapa-2'}
            disabled={flavor.length === 0}
            token={{
              name: 'tokenPageStep2',
              value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ0'
            }}
          />
        </S.WrapperBtn>
      </S.ContainerCard>
    </>
  )
}
