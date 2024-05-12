import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import LocaleSwitcher from './locale-switcher';
import Title from './ui/title';
import Link from 'next/link';

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <header className='py-6'>
      <nav className='container flex items-center justify-between m-auto'>
        <div>
          <Title type='h2'>Spelling Bee</Title>
          <p>
            created by{' '}
            <Link href='https://www.tunahantezcan.com/' className='text-sky-500 font-bold'>
              Tunahan Tezcan
            </Link>
          </p>
        </div>
        <LocaleSwitcher lang={lang} />
      </nav>
    </header>
  );
}
