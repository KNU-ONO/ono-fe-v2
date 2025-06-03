import { MapPin } from 'lucide-react';

type Props = {
  type: 'CU' | 'GS25' | '세븐일레븐' | '이마트24' | string;
  isSelected?: boolean;
  onClick?: () => void;
};

export const StoreMarker = ({ type, isSelected = false, onClick }: Props) => {
  const getColor = () => {
    switch (type) {
      case 'CU':
        return 'bg-purple-600';
      case 'GS25':
        return 'bg-blue-600';
      case '세븐일레븐':
        return 'bg-green-600';
      case '이마트24':
        return 'bg-yellow-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <div
      className={`relative cursor-pointer transition-transform ${isSelected ? 'z-10 scale-125' : ''}`}
      onClick={onClick}
    >
      <div className={`${getColor()} rounded-full p-1 text-white`}>
        <MapPin className='h-5 w-5' />
      </div>
      {isSelected && (
        <div className='absolute -bottom-6 left-1/2 -translate-x-1/2 transform rounded bg-white px-2 py-1 text-xs whitespace-nowrap shadow'>
          {type}
        </div>
      )}
    </div>
  );
};
