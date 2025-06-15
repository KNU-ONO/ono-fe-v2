import { useNavigate } from 'react-router-dom';

import { ChevronLeftIcon, X } from 'lucide-react';

import { Button } from '../../ui';

type Props = {
  variant?: 'default' | 'create';
};

const backButtonVariants = {
  default: <ChevronLeftIcon className='size-6' />,
  create: <X className='size-6' />,
};

export const BackButton = ({ variant = 'default' }: Props) => {
  const Icon = backButtonVariants[variant];

  const navigate = useNavigate();

  return (
    <Button
      variant='ghost'
      size='icon'
      className='size-7'
      onClick={() => navigate(-1)}
    >
      {Icon}
    </Button>
  );
};
