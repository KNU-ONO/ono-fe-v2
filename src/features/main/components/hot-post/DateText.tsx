type Props = {
  date: string;
};

export const DateText = ({ date }: Props) => {
  return (
    <p className='absolute top-[89px] left-[26px] h-[21px] w-[250px] text-[13px] leading-[16px] font-bold tracking-[-0.015em] text-[#B81E22]'>
      {date}
    </p>
  );
};
