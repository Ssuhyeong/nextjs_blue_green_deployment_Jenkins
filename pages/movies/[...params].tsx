import Seo from '@/components/Seo';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';

export default function Detail({ params }: InferGetServerSidePropsType<GetServerSideProps>) {
  const router = useRouter();
  const [title, id] = params as string[];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

interface Iparams {
  params: {
    params: GetServerSideProps;
  };
}

export async function getServerSideProps({ params: { params } }: Iparams) {
  return {
    props: { params },
  };
}
