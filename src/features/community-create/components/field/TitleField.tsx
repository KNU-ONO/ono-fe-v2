import { useFormContext } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormMessage, Input } from '@/shared';

import { CreatePosts } from '../../model';

export const TitleField = () => {
  const form = useFormContext<CreatePosts>();

  return (
    <FormField
      control={form.control}
      name='title'
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              {...field}
              placeholder='제목을 입력해주세요'
              value={field.value}
              className='w-full'
              variant='underline'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
