export const Spinner = () => {
  return (
    <div className='flex w-full justify-center'>
      <div
        className='inline-block size-8 animate-spin rounded-full border-[3px] border-current border-t-transparent text-primary'
        role='status'
        aria-label='loading'
      >
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
};
