import { useFormContext } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormMessage, Input } from '@/shared';

import { CreatePosts } from '../../model';

export const TagField = () => {
  const form = useFormContext<CreatePosts>();

  return (
    <FormField
      control={form.control}
      name='tag'
      render={({ field }) => (
        <FormItem className='w-full'>
          <FormControl>
            <div className='flex w-full flex-col items-center gap-3 px-5'>
              <span className='w-full font-semibold'>태그</span>
              <Input
                {...field}
                variant='underline'
                placeholder='오늘은 내가 바리스타 #32'
                value={field.value}
                className='w-full px-1 text-sm'
              />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
