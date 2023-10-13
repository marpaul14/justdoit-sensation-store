import Item from './utils/Item';
import Title from './utils/Title';

function Sales({ endpoint: { title, items } }) {
  return (
    <>
      <div>
        <Title title={title} />
        <div>
          {items?.map((item, i) => (
            <Item {...item} key={i} />
          ))}
          <Item />
        </div>
      </div>
    </>
  );
}

export default Sales;
