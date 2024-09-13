'use client'
import Nav from '@/app/components/Nav';
import TestComponent from '@/app/components/TestComponent';

export default function Home() {
  return (
      <div>
        <Nav />
        <main>
          <TestComponent />
        </main>
      </div>
  );
}
