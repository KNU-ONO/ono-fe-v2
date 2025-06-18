import { useFormContext } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormMessage, Input } from '@/shared';

import { CreatePosts } from '../../model';

export const PasswordField = () => {
  const form = useFormContext<CreatePosts>();

  return (
    <FormField
      control={form.control}
      name='password'
      render={({ field }) => (
        <FormItem className='w-full'>
          <FormControl>
            <Input
              {...field}
              placeholder='비밀번호 입력'
              value={field.value}
              type='password'
              className='w-full rounded-md border border-gray-300 text-sm'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
