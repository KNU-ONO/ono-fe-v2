import { BackButton, MenuButton, UserButton } from '@/shared';

export type HeaderVariant = 'default' | 'detail' | 'create';

type Props = {
  pageTitle: string;
  variant?: HeaderVariant;
};

const headerVariants = {
  default: {
    Left: BackButton,
    Right: UserButton,
  },
  detail: {
    Left: BackButton,
    Right: MenuButton,
  },
  create: {
    Left: () => <BackButton variant='create' />,
    Right: () => <div className='size-6' />,
  },
};

export const Header = ({ pageTitle, variant = 'default' }: Props) => {
  const { Left, Right } = headerVariants[variant];

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-white'>
      <div className='mx-auto flex h-14 items-center justify-between px-3'>
        <Left />
        <div className='flex items-center'>
          <h1 className='font-medium'>{pageTitle}</h1>
        </div>
        <Right />
      </div>
    </header>
  );
};
