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
              placeholder={`나만의 꿀조합을 공유해주세요.
#야식조합추천 #유행조합`}
              value={field.value}
              className='h-30 w-full resize-none rounded-md border-none px-3 py-2 text-sm shadow-none'
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};
