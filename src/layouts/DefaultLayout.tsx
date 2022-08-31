import React from 'react'
import Header from '../page-chunks/Header';
import Footer from '../page-chunks/Footer';

interface Props {
  children?: React.ReactNode
}

export default function DefaultValue({children}: Props) {
  return (
    <>
      <Header tabs={[{text:'Acasa',link:'acasa'}, {text:'Despre noi', link:'despre-noi'},
       {text:'articole', link:'articole'}, {text:'stiri',link:'stiri'}]}>
        Hai Sa Fim Cetateni <span>Model</span>
      </Header>
      {
        children
      }
      <Footer/>
    </>
  )
}
