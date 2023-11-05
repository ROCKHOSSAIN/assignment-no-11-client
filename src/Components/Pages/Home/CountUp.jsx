// import React, { useState, useEffect, useRef } from 'react';

// const CounterUp = () => {
//   const [count1, setCount1] = useState(1200);
//   const [count2, setCount2] = useState(900);
//   const [count3, setCount3] = useState(300);

//   const refs = [useRef(null), useRef(null), useRef(null)];

//   const thresholds = [0.3, 0.4, 0.5]; // Change these values as needed for the thresholds

//   const observers = refs.map((ref, index) => {
//     return new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];
//         const count = [count1, count2, count3][index];
//         const setCount = [setCount1, setCount2, setCount3][index];
//         if (entry.isIntersecting && count > 0) {
//           const interval = setInterval(() => {
//             setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
//           }, 10);
//           return () => clearInterval(interval);
//         }
//       },
//       { threshold: thresholds[index] }
//     );
//   });

//   useEffect(() => {
//     refs.forEach((ref, index) => {
//       if (ref.current) {
//         observers[index].observe(ref.current);
//       }
//     });

//     return () => {
//       refs.forEach((ref, index) => {
//         if (ref.current) {
//           observers[index].unobserve(ref.current);
//         }
//       });
//     };
//   }, [count1, count2, count3, refs, observers]);

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="flex">
//         <div ref={refs[0]} className="bg-gray-200 border border-gray-300 p-4 m-2 text-center">
//           <h2>Counter 1: {count1}</h2>
//         </div>
//         <div ref={refs[1]} className="bg-gray-200 border border-gray-300 p-4 m-2 text-center">
//           <h2>Counter 2: {count2}</h2>
//         </div>
//         <div ref={refs[2]} className="bg-gray-200 border border-gray-300 p-4 m-2 text-center">
//           <h2>Counter 3: {count3}</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CounterUp;
