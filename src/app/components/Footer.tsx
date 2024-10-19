'use client';

import { APP_NAME } from '@/utils/constants';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <footer className="bg-gray-100 text-gray-600 py-4">
      <div className="container text-center">
        <p className="text-sm">
          © {currentYear} {APP_NAME}. All rights reserved.
        </p>
        <nav className="mt-2">
          <Link href="/privacy" className="text-sm hover:underline mr-4">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm hover:underline">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}
