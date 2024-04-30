const Picture = ({source, alt}) => {
  return (
    <div>
      <img src={source} alt={alt} className="picture" />
    </div>
  )
}

export default Picture
