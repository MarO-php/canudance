import Image from 'next/image';

export default function BrandMark({small=false}:{small?:boolean}){
  return <Image className={small?'brand-mark small':'brand-mark'} src="/canudance-logo.png" alt="CANUDANCE logo" width={small?38:56} height={small?38:56} priority={small}/>;
}
