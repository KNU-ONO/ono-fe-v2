import { useFormContext } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormMessage, Input } from '@/shared';

import { CreatePosts } from '../../model';

export const NameField = () => {
  const form = useFormContext<CreatePosts>();

  return (
    <FormField
      control={form.control}
      name='authorName'
      render={({ field }) => (
        <FormItem className='w-full'>
          <FormControl>
            <Input
              {...field}
              placeholder='작성자명 입력'
              value={field.value}
              className='w-full rounded-md border border-gray-300 text-sm'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
