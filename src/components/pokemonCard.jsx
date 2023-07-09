import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import '../styles/PokemonList.css';

const PokemonCard = ({ name, imagen }) => {
  return (
    <Card
      title={name}
      cover={
        <img
          src={imagen}
          alt={imagen}
        />
      }
      extra={<StarOutlined />}
    >
      <Meta description='fire, magic' />
    </Card>
  );
};

export default PokemonCard;