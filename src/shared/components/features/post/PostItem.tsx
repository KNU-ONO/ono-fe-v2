import { Link } from 'react-router-dom';

import {
  Avatar,
  AvatarFallback,
  Card,
  CardContent,
  CardFooter,
  Post,
  getDynamicPath,
} from '@/shared';

type Props = {
  date: string;
} & Post;

export const PostItem = ({
  id,
  title,
  content,
  author,
  date,
  likes,
  comments,
}: Props) => {
  return (
    <Card>
      <CardContent className='p-4'>
        <Link to={getDynamicPath.postDetail(String(id))}>
          <h2 className='mb-2 text-lg font-medium hover:text-red-600'>
            {title}
          </h2>
        </Link>
        <p className='mb-4 line-clamp-2 text-sm text-muted-foreground'>
          {content}
        </p>
      </CardContent>
      <CardFooter className='flex justify-between border-t px-4 py-2 text-xs text-muted-foreground'>
        <div className='flex items-center space-x-4'>
          <div className='flex items-center space-x-1'>
            <Avatar className='h-5 w-5'>
              <AvatarFallback>{author[0]}</AvatarFallback>
            </Avatar>
            <span>{author}</span>
          </div>
          <span>{date}</span>
        </div>
        <div className='flex items-center space-x-4'>
          <span>좋아요 {likes}</span>
          <span>댓글 {comments}</span>
        </div>
      </CardFooter>
    </Card>
  );
};
