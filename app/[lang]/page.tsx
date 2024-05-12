import Game from '@/components/game/game';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import Title from '@/components/ui/title';

interface HomeProps {
  params: { lang: Locale };
}

export default async function Home({ params: { lang } }: HomeProps) {
  const { page } = await getDictionary(lang);

  return (
    <div className=' flex flex-col items-center justify-center'>
      <div className='flex items-end space-x-4'>
        <Title>{page.home.title}</Title>
        <p className='text-2xl text-center'>{new Date().toLocaleDateString(lang)}</p>
      </div>

      <div className='flex items-center justify-center'>
        <Game lang={lang} />
      </div>
    </div>
  );
}
