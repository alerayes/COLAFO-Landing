import Image from 'next/image'

import { Container } from '@/components/Container'
import CLSP from '@/images/patrocinadores/clsp.jpeg'
import LEDUC from '@/images/patrocinadores/leduc.jpeg'
import Quark from '@/images/patrocinadores/quark.jpeg'
import Oncopuntura from '@/images/patrocinadores/oncopuntura.jpeg'
import Feijoeiro from '@/images/patrocinadores/feijoeiro-logo.jpeg'
import Venosan from '@/images/patrocinadores/venosan-logo.jpeg'


export function Patrocinadores() {
  return (
    <section id="patrocinadores"  className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <Container>
      <div className=" mt-20 mb-4 text-center lg:mx-0">
          <h2
            id="speakers-title"
            className=" text-2xl font-semibold text-primary-green tracking-tighter"
          >
            Patrocinadores
          </h2>
        </div>
        <div className="mx-auto mb-8  place-content-center ">
            <h4 className='text-center font-semibold mb-8 text-yellow-600'>Categoria Ouro</h4>
            <div
              className="flex items-center justify-center"
            >
              <a href="https://www.instagram.com/clsp.distribuidora/" className='mb-8 mt-4'>
                  <Image src={CLSP} alt={'clsp-logo'} unoptimized width={200} height={10}/>
              </a>
            </div>
        </div>
        <div className="mx-auto mb-8  place-content-center ">
            <h4 className='text-center font-semibold mb-12 text-zinc-500'>Categoria Prata</h4>
            <div
              className="flex items-center justify-center"
            >
              <a href="https://www.instagram.com/quarkmedical/" className='mb-8 mr-7 '>
                  <Image src={Quark} alt={'quark-logo'} unoptimized width={190} height={140}/>
              </a>
              <a href="https://www.instagram.com/cursoleduc/" className='mb-4 mx-10'>
                  <Image src={LEDUC} alt={'leduc-logo'} unoptimized width={160} height={100}/>
              </a>
              <a href="https://www.instagram.com/fisiofernandafeijoeiro/?hl=en" className='mb-4 mx-10'>
                  <Image src={Feijoeiro} alt={'fernanda-feijoeiro'} unoptimized width={180} height={130}/>
              </a>
              <a href="https://www.instagram.com/oncopuntura/" className='mb-8 '>
                  <Image src={Oncopuntura} alt={'oncopuntura-logo'} unoptimized width={230} height={200}/>
              </a>
            </div>
        </div>
        <div className="mx-auto mb-8  place-content-center ">
            <h4 className='text-center font-semibold mb-12 text-yellow-800'>Categoria Bronze</h4>
            <div
              className="flex items-center justify-center"
            >
              <a href="https://www.instagram.com/venosanbrasil/?hl=en" className='mb-8 mr-7 '>
                  <Image src={Venosan} alt={'venosan-logo'} unoptimized width={270} height={170}/>
              </a>
            </div>
        </div>
        <div className="mx-auto my-4 h-px w-64 bg-primary-green/50" />
      </Container>
    </section>
  )
}
