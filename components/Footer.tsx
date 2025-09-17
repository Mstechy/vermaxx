import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-white">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-logo text-lg">Vermaxx</div>
          <div className="text-sm text-gray-500">Maximum Growth. Maximum Impact.</div>
        </div>

        <div className="text-sm text-gray-600">
          © {year} Vermaxx — Built with care.
        </div>

        <div className="flex gap-3">
          <Link href="#" className="text-sm text-gray-600">Privacy</Link>
          <Link href="#" className="text-sm text-gray-600">Terms</Link>
        </div>
      </div>
    </footer>
  );
}