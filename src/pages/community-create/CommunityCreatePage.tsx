import { CommunityCreateHeaderSection, CreatePostsForm } from '@/features';

export default function CommunityCreatePage() {
  return (
    <div className='relative mx-auto h-[812px] w-[375px] bg-white'>
      <CommunityCreateHeaderSection />
      <CreatePostsForm />
    </div>
  );
}
