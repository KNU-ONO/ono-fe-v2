import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';

import { Button, Form } from '@/shared';

import { CreatePostRequest, createPostAPI } from '../../apis';
import {
  ContentsField,
  NameField,
  PasswordField,
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
      franchiseId: 1, // 필요에 따라 동적으로 설정
    });
  };
  return (
    <Form {...form}>
      <form
        className='flex flex-col items-center gap-5 py-3'
        onSubmit={(e) => e.preventDefault()}
      >
        <div className='w-full'>
          <NameField />
          <TitleField />
          <ContentsField />
          <PasswordField />
        </div>
        <Button
          // disabled={!form.formState.isValid}
          type='submit'
          onClick={() => form.handleSubmit(onSubmit)()}
          className='w-full bg-red-600 text-lg text-white hover:bg-red-700 disabled:bg-gray-400'
        >
          등록하기
        </Button>
      </form>
    </Form>
  );
};
