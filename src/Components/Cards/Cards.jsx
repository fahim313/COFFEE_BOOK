import { Link, useLocation } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

export default function Cards({ coffee, handleRemove }) {
  const { pathname } = useLocation();
  const {
    id,
    name,
    image,
    category,
    origin,
    type,
    rating,
    popularity,
  } = coffee;

  return (
    <div className="flex relative w-[350px] mx-auto mt-8 my-2">
      <Link
        to={`/coffee/${id}`}
        className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden w-full h-full"
      >
        <figure className="w-full h-48 overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={image}
            alt={name}
          />
        </figure>
        <div className="p-4">
          <h1 className="text-xl font-semibold">Name: {name}</h1>
          <p>Category: {category}</p>
          <p>Type: {type}</p>
          <p>Origin: {origin}</p>
          <p>Rating: {rating}</p>
          <p>Popular: {popularity}</p>
        </div>
      </Link>
      {pathname === '/dashboard' && (
        <div
          onClick={() => handleRemove(id)}
          className="absolute p-3 rounded-full cursor-pointer bg-warning -top-5 -right-5"
        >
          <FaTrashAlt size={20} />
        </div>
      )}
    </div>
  );
}
