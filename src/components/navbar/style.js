import styled from 'styled-components'

export const NavbarContainer = styled.div`
background: #fff;
    .navItem a{
        text-decoration: none !important;
        color: black;
        font-weight: 500,
    }
    .logotext p{
        font-size: 0.7rem;
    }
    .logotext p:first-of-type{
        font-weight: bold;
    }

    .navItem{
        position: relative;
        text-align: center;
        padding: 18px 0;
    }
    .navItem::before{
        transition: 300ms;
        height: 3px;
        content: "";
        position: absolute;
        background-color: lightgray;
    }
    .navItem::before {
        height: 0%;
        width: 100%;
        bottom: 0px;
        left: 0px;
      }
      
      .navItem:hover::before {
        height: 3px;
      }
@media(max-width: 976px){
    .brand-logo{
        width: 40px;
        height: 40px;
    }
}
`
