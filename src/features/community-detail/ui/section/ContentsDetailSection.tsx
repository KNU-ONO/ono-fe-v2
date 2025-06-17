import { Comment } from '../../apis';
import { CommentList, PostDetail } from '../../components';

type Props = {
  authorName: string;
  title: string;
  content: string;
  comments?: Comment[];
  createdAt: string;
};

export const ContentsDetailSection = ({
  authorName,
  title,
  content,
  comments,
  createdAt,
}: Props) => {
  return (
    <div className='w-full p-5'>
      <PostDetail
        authorName={authorName}
        title={title}
        content={content}
        createdAt={createdAt}
      />

      <CommentList comments={comments} deleteComment={() => {}} />
    </div>
  );
};
