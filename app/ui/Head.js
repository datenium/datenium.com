import Head from 'next/head';

export default function CustomHead({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
