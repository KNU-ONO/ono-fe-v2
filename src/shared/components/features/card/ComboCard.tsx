import { Link } from 'react-router-dom';

import { Button, Card, CardContent, Items, getDynamicPath } from '@/shared';

type Props = {
  id: string;
  title: string;
  price: string;
  description: string;
  items: Items[];
  likeCount: number;
  store: string;
};

export const ComboCard = ({
  id,
  title,
  price,
  description,
  items,
  likeCount,
  store,
}: Props) => {
  return (
    <Card className='overflow-hidden'>
      <CardContent className='p-4'>
        <div className='flex flex-col'>
          <div className='mb-1 text-sm text-muted-foreground'>{store}</div>
          <h3 className='mb-2 text-lg font-medium'>{title}</h3>
          <p className='mb-2 text-sm text-muted-foreground'>{price} 골조합</p>
          <p className='mb-4 line-clamp-2 text-sm'>{description}</p>

          <div className='mt-2 flex space-x-2'>
            {items.map((item, index) => (
              <div key={index} className='flex flex-col items-center'>
                <div className='relative mb-1 flex h-16 w-16 items-center justify-center overflow-hidden rounded-md bg-gray-100'>
                  <img
                    src={item.image || '/placeholder.svg'}
                    alt={item.name}
                    className='object-cover'
                  />
                </div>
                <span className='text-xs'>{item.name}</span>
              </div>
            ))}
          </div>

          <div className='mt-4 flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
              <span className='text-sm'>좋아요 {likeCount}</span>
            </div>
            <Link to={getDynamicPath.comboDetail(String(id))}>
              <Button
                variant='outline'
                size='sm'
                className='border-red-600 text-red-600'
              >
                자세히 보기
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
