import './styles/styles.css'

export const App = () => {
  const webpackModeName = process.env.name
  console.log(webpackModeName)

  return (
    <>
      <h1>Recat Typescripy Webpack - {webpackModeName}</h1>
    </>
  )
}
