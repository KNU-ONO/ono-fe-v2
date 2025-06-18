import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';

import { Button, Form } from '@/shared';

import { CreatePostRequest, createPostAPI } from '../../apis';
import {
  CombinationField,
  ContentsField,
  NameField,
  PasswordField,
  PostTypeField,
  TagField,
  TitleField,
} from '../../components';
import { CreatePosts, CreatePostsSchema } from '../../model';

export const CreatePostsForm = () => {
  const { mutate: createPostsMutate } = useMutation({
    mutationFn: (data: CreatePostRequest) => createPostAPI(data),
    onSuccess: () => {},
    onError: () => {},
  });

  const form = useForm<CreatePosts>({
    resolver: zodResolver(CreatePostsSchema),
    mode: 'onSubmit',
    defaultValues: {
      title: '',
      content: '',
      authorName: '익명',
      password: '',
      postType: '',
    },
  });

  const onSubmit = (data: CreatePosts) => {
    createPostsMutate({
      title: data.title,
      content: data.content,
      authorName: data.authorName || '익명',
      password: data.password,
      //TODO: 꿀조합, 프랜차이즈 ID 수정 필요
      combinationId: 1, // 필요에 따라 동적으로 설정
      franchiseId: 1, // ㅣ 필요에 따라 동적으로 설정
      postType: data.postType,
    });
  };
  return (
    <Form {...form}>
      <form
        className='flex flex-col items-center gap-5'
        onSubmit={(e) => e.preventDefault()}
      >
        <div className='flex w-full flex-col gap-3 px-5 py-3'>
          <TitleField />
          <ContentsField />
        </div>
        <div className='h-4 w-full bg-ono-gray' />
        <PostTypeField />
        <TagField />
        <div className='h-4 w-full bg-ono-gray' />
        <CombinationField />
        <div className='flex w-full flex-col gap-3 p-5 shadow-[0_-2px_4px_-2px_rgba(0,0,0,0.1)]'>
          <div className='flex w-full gap-3'>
            <NameField />
            <PasswordField />
          </div>
          <Button
            disabled={!form.formState.isValid}
            type='submit'
            onClick={() => form.handleSubmit(onSubmit)()}
            className='text-md w-full bg-ono-red-two text-white hover:bg-ono-red-two/80 disabled:bg-gray-400'
          >
            저장하기
          </Button>
        </div>
      </form>
    </Form>
  );
};
