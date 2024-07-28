import { Icons } from '@/components/icons';

export default function loading() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className='animate-ping'>
        <Icons.logo />
      </div>
    </div>
  );
}
