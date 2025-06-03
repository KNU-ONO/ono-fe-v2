import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='hidden border-t bg-white md:block'>
      <div className='container py-6'>
        <div className='flex flex-col items-center justify-between md:flex-row'>
          <div className='flex items-center space-x-4'>
            <Link to='/' className='font-bold text-red-600'>
              편의점
            </Link>
            <span className='text-sm text-muted-foreground'>
              © {new Date().getFullYear()} 편의점 상품 조합 서비스
            </span>
          </div>
          <div className='mt-4 flex items-center space-x-4 md:mt-0'>
            <Link
              to='/terms'
              className='text-sm text-muted-foreground hover:text-foreground'
            >
              이용약관
            </Link>
            <Link
              to='/privacy'
              className='text-sm text-muted-foreground hover:text-foreground'
            >
              개인정보처리방침
            </Link>
            <Link
              to='/contact'
              className='text-sm text-muted-foreground hover:text-foreground'
            >
              고객센터
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
