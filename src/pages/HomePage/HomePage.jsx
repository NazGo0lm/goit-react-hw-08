import DocumentTitle from '../../components/DocumentTitle';


export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div >
        <h1 >
          Contacts welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
    </>
  );
}