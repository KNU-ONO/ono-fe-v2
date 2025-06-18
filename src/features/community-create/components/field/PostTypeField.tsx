import { useFormContext } from 'react-hook-form';

import {
  Badge,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  cn,
} from '@/shared';

import { CreatePosts, POST_TYPE_DATA } from '../../model';

export const PostTypeField = () => {
  const form = useFormContext<CreatePosts>();

  return (
    <FormField
      control={form.control}
      name='postType'
      render={({ field }) => (
        <FormItem className='w-full'>
          <FormControl>
            <div className='flex w-full flex-col items-center gap-3 px-5'>
              <span className='w-full font-semibold'>분류</span>
              <div className='flex w-full gap-3'>
                {POST_TYPE_DATA.map((item) => (
                  <Badge
                    key={item.id}
                    variant='outline'
                    className={cn(
                      'cursor-pointer rounded-full border border-gray-300 px-3 py-1.5 text-xs transition-colors',
                      form.watch('postType') === item.value
                        ? 'border-ono-red-two bg-ono-red-two text-white'
                        : 'text-gray-500 hover:border-ono-red-two hover:bg-ono-red-two hover:text-white',
                    )}
                    onClick={() => {
                      form.setValue('postType', item.value);
                      field.onChange(item.value);
                    }}
                  >
                    {item.name}
                  </Badge>
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
