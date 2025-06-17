import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Textarea,
} from '@/shared';

import { WriteComment } from '../../model';

export const CommentField = () => {
  const form = useFormContext<WriteComment>();

  return (
    <FormField
      control={form.control}
      name='content'
      render={({ field }) => (
        <FormItem className='w-full'>
          <FormControl>
            <Textarea
              {...field}
              placeholder='댓글을 입력하세요'
              value={field.value}
              className='w-full resize-none rounded-md border border-gray-300 text-sm'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
