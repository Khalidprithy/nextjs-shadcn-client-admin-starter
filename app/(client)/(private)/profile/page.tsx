import { auth } from '@/auth';

export default async function Page() {
  const session = await auth();

  return (
    <div className="flex items-center justify-center">
      <div className="rounded-lg border bg-white p-8 text-center shadow">
        <h1 className="text-lg font-semibold text-gray-800">
          Welcome, {session?.user?.email}
        </h1>
      </div>
    </div>
  );
}
