// components/Pagination.tsx
'use client';

import { useRouter, useSearchParams } from 'next/navigation';

interface PaginationProps {
  totalPages: number;
}

export default function Pagination({ totalPages }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const changePage = (page: number) => {
    console.log("Changing page to:", page);
    
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(page));
    router.push(`?${params.toString()}`);
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      <button
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Prev
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => changePage(page)}
          className={`px-3 py-1 border rounded ${
            page === currentPage ? 'bg-blue-500 text-white' : ''
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
