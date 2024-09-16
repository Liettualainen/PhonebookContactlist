import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
import { Contactbook } from './ContactBook/ContactBook';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle/>
      <Contactbook />
    </Layout>
  );
};


























// export const App = () => {
  
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       <span>Phonebook
//       </span>
      
//       <div>
//       <span><br />Name
//       </span>
//       <input type="text" name="name" required />
//     <span><br />Number
//       </span>
        
//         <input type="tel" name="number" required /><br />
//         <button>Add contsct</button>
//       </div>


//     </div>
//   );
// };
