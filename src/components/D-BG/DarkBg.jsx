import './DarkBg.scss'

const DarkBg = ({title}) => {
  return (
    <section className="about-us">
    <div className="about-us__overlay">
      <h1 className="about-us__title">{title}</h1>
    </div>
  </section>
  )
}

export default DarkBg