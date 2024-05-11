import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

interface HomeProps {
  params: { lang: Locale };
}

export default async function Home({ params: { lang } }: HomeProps) {
  const { page } = await getDictionary(lang);

  return (
    <div>
      <h1>{page.home.title}</h1>
      {lang === 'en' ? <p>en</p> : <p>tr</p>}
    </div>
  );
}
