export const Item = ({ num, title, name }) => {
  return (
    <>
      <ul className="border-contents">
        <li>{num}</li>
        <li>{title}</li>
        <li>{name}</li>
      </ul>
    </>
  );
};
