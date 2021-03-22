import { createContext, ReactNode, useEffect, useState } from 'react';
import booksData from '../../books.json';
import deposData from '../../depositions.json';

interface CarousellContextData {
  bookPosition: number;
  deposPosition: number;
  books: Books[];
  depositions: DepositionsProps[];
  handleBookPosition: (arrayBook: number) => void;
  handleDeposPosition: (arrayDepos: number) => void;
}

interface CarousellProviderProps {
  children: ReactNode;
}

interface Books {
  id: number;
  image: string;
  smallImage: string;
  title: string;
  smallTitle: string;
  author: string;
  description: string;
  amount: number;
  link: string;
  price: string;
  postface: string;
}

interface DepositionsProps {
  message: string;
  name: string;
  date: string;
  id: number;
}

export const CarousellContext = createContext({} as CarousellContextData);

export function CarousellProvider({ children }: CarousellProviderProps) {
  const [books, setBooks] = useState<Books[]>([]);
  const [depositions, setDepositions] = useState<DepositionsProps[]>([]);
  const [bookPosition, setBookPosition] = useState(0);
  const [deposPosition, setDeposPosition] = useState(0);

  useEffect(() => {
    setBooks(booksData);
    setDepositions(deposData);
  }, []);

  // Books Positions
  useEffect(() => {
    if (books) {
      const lastPosition = books.length;
      if (bookPosition < 0) {
        setBookPosition(lastPosition);
      }
      if (bookPosition === lastPosition) {
        setBookPosition(0);
      }
    }
  }, [bookPosition, books]);

  useEffect(() => {
    let carousell = setInterval(() => {
      setBookPosition(bookPosition + 1);
    }, 6000);

    return () => clearInterval(carousell);
  }, [bookPosition]);

  function handleBookPosition(arrayBook: number) {
    setBookPosition(arrayBook);
  }

  // Depositions Positions
  useEffect(() => {
    if (depositions) {
      const lastPosition = depositions.length;
      if (deposPosition < 0) {
        setDeposPosition(lastPosition - 1);
      }
      if (deposPosition === lastPosition) {
        setDeposPosition(0);
      }
    }
  }, [deposPosition, depositions]);

  useEffect(() => {
    let carousell = setInterval(() => {
      setDeposPosition(deposPosition + 1);
    }, 8000);

    return () => clearInterval(carousell);
  }, [deposPosition]);

  function handleDeposPosition(arrayDepos: number) {
    setDeposPosition(arrayDepos);
  }

  return (
    <CarousellContext.Provider
      value={{
        books,
        depositions,
        bookPosition,
        deposPosition,
        handleBookPosition,
        handleDeposPosition,
      }}
    >
      {children}
    </CarousellContext.Provider>
  );
}
