type Props = {
  title: string;
  content: string;
};

export const Contents = ({ title, content }: Props) => {
  return (
    <div className='flex flex-col gap-2 py-2'>
      <div className='text-md font-semibold text-black'>{title}</div>
      <div className='line-clamp-2 text-sm font-normal text-black'>
        {content}
      </div>
    </div>
  );
};
