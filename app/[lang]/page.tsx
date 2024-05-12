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
    <div>
      <Title>{page.home.title}</Title>

      <div className='flex items-center justify-center'>
        <Game lang={lang} />
      </div>
    </div>
  );
}
