import { useFormContext } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormMessage, Input } from '@/shared';

import { WriteComment } from '../../model';

export const PasswordField = () => {
  const form = useFormContext<WriteComment>();

  return (
    <FormField
      control={form.control}
      name='password'
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              {...field}
              type='password'
              placeholder='비밀번호를 입력하세요'
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
