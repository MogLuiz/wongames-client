import Home from "templates/Home"

export default function Index(props: any) {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return <Home {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      ola: "x"
    }
  }
}
