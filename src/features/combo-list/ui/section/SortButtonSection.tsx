import { SortButton } from '../../components';

type Props = {
  setSortOrder: (sortOrder: '인기순' | '등록순') => void;
};

export const SortButtonSection = ({ setSortOrder }: Props) => {
  return (
    <>
      {['인기순', '등록순'].map((label) => (
        <SortButton key={label} label={label} setSortOrder={setSortOrder} />
      ))}
    </>
  );
};
