import { useFormContext } from 'react-hook-form';

import { Plus } from 'lucide-react';

import { FormControl, FormField, FormItem, FormMessage } from '@/shared';

import { CreatePosts } from '../../model';

export const CombinationField = () => {
  const form = useFormContext<CreatePosts>();

  return (
    <FormField
      control={form.control}
      name='combination'
      render={({ field }) => (
        <FormItem className='w-full px-2'>
          <FormControl>
            <div className='flex w-full flex-col items-center justify-between gap-3 rounded-md p-3'>
              <span className='w-full font-semibold'>꿀조합 추가</span>
              <div className='flex w-full items-center justify-between gap-3'>
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    {...field}
                    className='flex aspect-square w-full items-center justify-center rounded-md bg-ono-gray'
                  >
                    <div className='flex size-15 items-center justify-center rounded-full border-2 border-dotted border-[#D9D9D9]'>
                      <Plus className='size-5 text-[#BEBEBE]' />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
