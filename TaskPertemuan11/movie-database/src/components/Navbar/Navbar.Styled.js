import styled from "styled-components";

// const StyledNavbar = styled.div`
//   background-color: #000;
//   padding: 1rem;
//   color: #FFFFFF;

//   nav {
//     display: flex;
//     flex-direction: column;
//   }

//   h1 {
//     font-size: 2.4rem;
//     margin-bottom: 1rem;
//     color: #FFFAFA;
//   }

//   ul {
//     display: flex;
//     flex-direction: column;
//     list-style: none;
//   }

//   li {
//     margin-bottom: 1rem;
//   }

//   Link {
//     color: #FFFFFF;
//     text-decoration: none;
//   }

//   @media screen and (min-width: 768px) {
//     nav {
//       flex-direction: row;
//       justify-content: space-between;
//       align-items: center;
//     }

//     h1 {
//       margin-bottom: 0;
//     }

//     ul {
//       flex-direction: row;
//     }

//     li {
//       margin: 0 1rem;
//     }
//   }

//   @media screen and (min-width: 992px) {
//     /* 
//    * Nothing TODO HERE.
//    * We haven't styling Navbar.
//    */
//   }
// `;


const Container = styled.div`
  background-color: #000000;
  padding: 1rem;
  color: #fff;
`;

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h1 {
      margin-bottom: 0;
    }
    ul {
      flex-direction: row;
    }
    li {
      margin: 0 1rem;
    }
  }
  @media screen and (min-width: 992px) {
  }
`;

export default StyledNavbar;
export { Container };