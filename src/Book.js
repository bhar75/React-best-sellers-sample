const Book = (props) => {
  const { img, title, author, num } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title.toUpperCase()}</h2>
      <h5>{author}</h5>
      <span className="number">#{num + 1}</span>
    </article>
  );
};

export default Book;
