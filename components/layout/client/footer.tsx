import { Icons } from '@/components/icons';

export default function footer() {
  return (
    <footer className="border-t bg-background/95 p-2 text-center backdrop-blur">
      <div className="flex items-center justify-center gap-2">
        <small>All rights reserved by &copy; 2024 dev.kbin</small>

        <a href="https://github.com/Khalidprithy" target="_blank">
          <Icons.gitHub className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
