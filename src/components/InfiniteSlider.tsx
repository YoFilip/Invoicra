import { InfiniteSliderUI } from '@/components/ui/infinite-slider';
import Image from 'next/image';

export default function InfiniteSlider() {
  return (
    <div className="w-full max-w-none flex justify-center">
      <InfiniteSliderUI>
      <Image
        src='https://motion-primitives.com/apple_music_logo.svg'
        alt='Apple Music logo'
        width={180}
        height={180}
        className='h-[180px] w-auto grayscale'
      />
      <Image
        src='https://motion-primitives.com/apple_music_logo.svg'
        alt='Apple Music logo'
        width={180}
        height={180}
        className='h-[180px] w-auto grayscale'
      />
      <Image
        src='https://motion-primitives.com/apple_music_logo.svg'
        alt='Apple Music logo'
        width={180}
        height={180}
        className='h-[180px] w-auto grayscale'
      />
      <Image
        src='https://motion-primitives.com/apple_music_logo.svg'
        alt='Apple Music logo'
        width={180}
        height={180}
        className='h-[180px] w-auto grayscale'
      />
      <Image
        src='https://motion-primitives.com/apple_music_logo.svg'
        alt='Apple Music logo'
        width={180}
        height={180}
        className='h-[180px] w-auto grayscale'
      />
      <Image
        src='https://motion-primitives.com/apple_music_logo.svg'
        alt='Apple Music logo'
        width={180}
        height={180}
        className='h-[180px] w-auto grayscale'
      />
      {/* <Image
        src='https://motion-primitives.com/chrome_logo.svg'
        alt='Chrome logo'
        width={180}
        height={180}
        className='h-[180px] w-auto grayscale'
      />
      <Image
        src='https://motion-primitives.com/strava_logo.svg'
        alt='Strava logo'
        width={180}
        height={180}
        className='h-[180px] w-auto grayscale'
      />
      <Image
        src='https://motion-primitives.com/nintendo_logo.svg'
        alt='Nintendo logo'
        width={180}
        height={180}
        className='h-[180px] w-auto grayscale'
      />
      <Image
        src='https://motion-primitives.com/jquery_logo.svg'
        alt='Jquery logo'
        width={180}
        height={180}
        className='h-[180px] w-auto grayscale'
      />
      <Image
        src='https://motion-primitives.com/prada_logo.svg'
        alt='Prada logo'
        width={180}
        height={180}
        className='h-[180px] w-auto grayscale'
      /> */}
      </InfiniteSliderUI>
    </div>
  );
}