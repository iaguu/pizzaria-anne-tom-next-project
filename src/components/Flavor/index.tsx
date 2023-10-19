import { useContext, useEffect } from 'react';
import * as S from 'components/Flavor/styles';
import { DataContext } from 'hooks/UseContext';
import * as C from 'components/BtnNext';
import { getStorage, setStorage } from 'utils/HandleSessionStorage';
import { useCart } from 'hooks/UseCart';

interface FlavorProps {
  data: {
    id: string;
    img: string;
    ingredients: string;
    name: string;
    points: number;
    recommendationDay: boolean;
    price: number;
  }[];
}

export const Flavor = ({ data }: FlavorProps) => {

  
  const { flavor, setFlavor, price, setPrice, cart, setCart } = useContext(DataContext);

  const ConvertToPrice = (price: number) => useCart(price)

  useEffect(() => {
    
    const savedFlavor = getStorage('flavor');
    const savedPrice = getStorage('price');
    const savedCart = getStorage('cart');


    if (savedFlavor) {
      setFlavor(savedFlavor);
    }

    if (savedPrice !== null) {
      setPrice(parseFloat(savedPrice));
    }else{
      setPrice(0)
    }

    if (savedCart) {
      setFlavor(savedCart);
    }

  }, [setFlavor, setPrice, setCart]);



  const addCart = (price: number) => {

    setStorage('cart', price)

    setCart(price)
  }

  const changePrice = (price: number) => {
  
    setPrice(price || 0)
    addCart(price || 0)


  }

  const debug = () =>{
    console.log("====== DEBUG ======");

    console.log("Preço salvo no estado: R$" + price);
    console.log("Carrinho salvo no estado: R$" + cart);
    console.log("Sabores salvo no estado: " + flavor);

    console.log("====== DEBUG ======");
  }

  const apply = (has: boolean, price: number) => {
    debug()

    var total = 0 + price;

    if(has === true){
      const existingFlavor = flavor[0];
      const maxPrice = Math.max(existingFlavor?.price || 0, price);
      total = maxPrice
    }else{
      total = flavor[0].price
    }

    changePrice(total)

    debug()

  }

  const changeFlavorChecked = (id: string, price: number) => {

    const currentFlavorClicked = data.find(el => el.id === id);


    if (currentFlavorClicked) {

      const verifyItemInFlavorClicked = flavor.find((el:{id:string}) => el.id === id);
      

      var hasProduct = false;


          if (verifyItemInFlavorClicked) {

            setFlavor(flavor.filter((el:{id:string}) => el.id !== id));
            hasProduct = false;

            if(flavor[0] === undefined || flavor[0] === null || flavor.lenght === 0){
              console.log("!!! - Valor nulo no verifyItemFlavor - !!!");
              setPrice(0);
            }else{
              apply(hasProduct, price)
            }

          }else{
            
            if (flavor.length < 2) {

              setFlavor([...flavor, currentFlavorClicked]);
              hasProduct = true;
              apply(hasProduct, price)


            }else{
              alert('Limite de sabores atingido. Não é possível adicionar mais sabores.');
            }
          }


      }

      

    }

    
  

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
