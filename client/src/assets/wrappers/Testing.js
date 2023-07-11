import styled from 'styled-components'

const Wrapper = styled.main `
margin-left:5rem ;
 .logo-img{
  height:3rem;
  width:10rem;
 }
.page {
  padding-top:12rem;
}
.main-img{
  width: 60rem;
  height: 20rem;
}
h1{
  font-weight: 700;
  span{
    color: var(--primary-500);
  }
}
p{
color:var(--primary-900);
}
.btn-hero{
   height: 20%;
   width: min-content;
}
.page{
   display: flex;
}
`
 
 

export default Wrapper
