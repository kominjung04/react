import { useState } from 'react'
import BookItem from './BookItem';
import './App.css'

const bookdata = [
  { id:1, title: '춤추는 조커', image : 'https://image.yes24.com/goods/30569505/XL'},
  { id:2, title: '블레이드', image : 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788963707952.jpg'},
  { id:3, title: '난생처음 C언어', image : 'https://www.hanbit.co.kr/data/books/B2545053750_l.jpg'},
  { id:4, title: '언젠가 우리가 같은 별을 바라본다면', image : 'https://contents.kyobobook.co.kr/dtl/Klover/mok/f0069a61-92c5-4042-8d38-b5e1736b1400-20240720-204148.jpg'},
  { id:5, title: '떠난 후에 남겨진 것들', image : 'https://image.yes24.com/goods/19076823/XL'},
  { id:6, title: '전지적독자시점', image : 'https://i.namu.wiki/i/O9FQww9Qv6BQpLwss9tV78aYXbrEF4fSrJeeTLIMH9GHjR4UTPoMRvjptAmcYBn3EJ0ZILhi0mtRvqFMYig1YQ.webp'} 
];

function App() {
  const [rating, setRating] = useState({});
  const [filterText,setFilterText] = useState('');

  const handleRating = (id,rating) => {
    setRating(prev => ({...prev,[id]:rating}));
  };

   const Sbooklist = bookdata.filter(book =>
    book.title.replace(/\s/g, '').includes(filterText.replace(/\s/g, ''))
  );
//replace(/\s/, '') - 공백모두제거
  return (
      <div>
       <h1>BookList</h1>
       <div>
        <SearchBar
          filterText={filterText}
          onFilterTextChange={setFilterText} />
       </div>

      <div>
       {Sbooklist.map(book=>(
        <BookItem
        key = {book.id}
        title = {book.title}
        image = {book.image}
        rating={rating[book.id] || 0}
        onRate={(rating) => handleRating(book.id,rating)}
        />
        
      ))}
      </div>
      </div>  
  );
}


function SearchBar({filterText,onFilterTextChange}){
  return (
    <input
      type="text"
      value={filterText} placeholder='검색'
      onChange={(e) => onFilterTextChange(e.target.value)} />
  )
}
export default App
