import Layout from '~/components/Layout';

const Index = ({ hello }) => (
  <Layout title="Hack Covid-19">
    <div className="row">
      <div className="col-lg-60 col-md-60 col-sm-60">
        {hello}
      </div>
    </div>
  </Layout>
)

export const getStaticProps = async () => {
  const hello = 'Hello Covid'
  return { props: { hello } };
}

export default Index;