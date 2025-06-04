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
        <FormItem>
          <FormControl>
            <Input
              {...field}
              placeholder='작성자명을 입력하세요'
              value={field.value}
              className='mb-3 w-full rounded-md border border-gray-300 px-3 py-2 text-sm'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
