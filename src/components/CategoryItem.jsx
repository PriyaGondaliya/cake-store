import {
  Button,
  Image,
  Info,
  ItemContainer,
  Title,
} from "../styles/CategoriesStyle";

const CategoryItem = ({ item }) => {
  return (
    <ItemContainer>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </ItemContainer>
  );
};

export default CategoryItem;
