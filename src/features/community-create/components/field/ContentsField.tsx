import { useFormContext } from 'react-hook-form';

import { FormControl, FormField, FormItem, Textarea } from '@/shared';

import { CreatePosts } from '../../model';

export const ContentsField = () => {
  const form = useFormContext<CreatePosts>();

  return (
    <FormField
      control={form.control}
      name='content'
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Textarea
              {...field}
              placeholder='내용을 입력하세요'
              value={field.value}
              className='mb-3 h-30 w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm'
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};
