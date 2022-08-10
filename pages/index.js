import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bienvenido a Statologos!" />
        <p className="description">
          Statologos Study es la mejor guía de estudio de estadísticas en línea que lo ayuda a comprender todos los conceptos básicos que se enseñan en cualquier curso de estadística elemental y le facilita la vida como estudiante.
        </p>
      </main>

      <Footer />
    </div>
  )
}
