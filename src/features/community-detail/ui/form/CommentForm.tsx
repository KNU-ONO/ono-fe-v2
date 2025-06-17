import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { MessageCirclePlus } from 'lucide-react';

import { Button, Form, queryClient } from '@/shared';

import { addCommentAPI } from '../../apis';
import { CommentField, NameField, PasswordField } from '../../components';
import { getCommentQueryKey } from '../../hooks';
import { WriteComment, WriteCommentSchema } from '../../model';

export const CommentForm = () => {
  const { id } = useParams();

  const postId = id;

  const { mutate: writeCommentMutate } = useMutation({
    mutationFn: async (data: WriteComment) => {
      return addCommentAPI({
        postId: Number(postId),
        authorName: data.authorName ?? '익명',
        content: data.content,
        password: data.password,
      });
    },
    onSuccess: () => {
      onSuccess();
    },
  });

  const form = useForm<WriteComment>({
    resolver: zodResolver(WriteCommentSchema),
    mode: 'onSubmit',
    defaultValues: {
      authorName: '익명',
      content: '',
      password: '',
    },
  });

  const onSubmit = (data: WriteComment) => {
    writeCommentMutate(data);

    form.reset();
  };

  const onSuccess = () => {
    alert('댓글 작성 완료!');

    queryClient.invalidateQueries({
      queryKey: getCommentQueryKey({ postId: Number(postId) }),
    });
  };

  return (
    <Form {...form}>
      <form
        className='flex w-full items-center justify-between gap-2 p-3'
        onSubmit={(e) => e.preventDefault()}
      >
        <div className='flex w-full flex-col gap-2'>
          <div className='flex w-full items-center gap-2'>
            <NameField />
            <PasswordField />
          </div>
          <div className='flex w-full gap-2'>
            <CommentField />
            <Button
              type='submit'
              disabled={!form.formState.isValid}
              onClick={() => form.handleSubmit(onSubmit)()}
              className='h-16 w-16 bg-red-600 text-sm text-white hover:bg-red-700 disabled:bg-gray-400'
            >
              <MessageCirclePlus className='size-6' />
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
