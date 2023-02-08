import { useSelector } from 'react-redux';
import DiaryProductsListItem from 'components/DiaryProductsListItem/DiaryProductsListItem';
import css from './DiaryProductsList.module.css';

function DiaryProductsList({ startDate }) {
  const eatenProducts = useSelector(state => state.infoUser?.eatenProducts);

  return (
    <ul className={css.productsList}>
      {eatenProducts?.length
        ? eatenProducts.map(product => (
            <DiaryProductsListItem
              key={product.id}
              product={product}
              id={product.id}
              startDate={startDate}
            />
          ))
        : null}
    </ul>
  );
}

export default DiaryProductsList;
