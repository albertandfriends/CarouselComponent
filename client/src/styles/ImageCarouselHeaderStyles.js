import styled from 'styled-components';

export const Title = styled.h1`font-weight: 700;
font-size: 32px;
color: #000;
margin: 0;
font-family: arial;
margin-left: 12px;
margin-top: 15px;
`;

export const RatingAndReviewDiv = styled.div`display:flex; flex-direction:row; overflow: auto; margin-top: -5px; `

export const Rating = styled.div`
--percent: calc(var(3) / 5 * 100%);
--width: 20%;
--dot-size: 30px;
--dot-color: #fff;
--dot-background: #00aa6c;
margin-left: 13px;
letter-spacing: 1px;
font-size: var(--dot-size);
font-family: times; // make sure ★ appears correctly
line-height: -5;

&:hover {
  cursor: pointer;
}
&::before {
  content: '●●●●○';
  letter-spacing: -2px;
  padding: 0;
  margin-right: -4px;
  background: linear-gradient(90deg, var(--dot-background) var(--percent), var(--dot-color) var(--percent));
  --dot-size: 30px;
  --dot-color: #fff;
  --dot-background: #00aa6c;
  -webkit-background-clip: text;
  -webkit-text-fill-color: #00aa6c;
  -webkit-text-stroke: 0px #00aa6c;
}
}
`

export const Reviews = styled.p`
font-family: Poppins;
font-size: 16px;
font-weight: 530;
height: 15px;
margin: 12px 0 0 10px;
font-size: 14px;
border-bottom: 1px dotted #e0e0e0;
align-items: center;
color: #474747;
&:hover {
  border-bottom: 1px solid #474747;
  font-weight: bold;
  cursor: pointer;
}
`;

export const TextHeader = styled.div`display: flex; justify-content: space-between;`;

export const TextDivs = styled.div`display: flex; flex-direction: column; justify-content: flex-start;`;

export const TextDiv1 = styled.div`display: flex; flex-direction:row; color: #474747; font-size: 14px; margin-left: 12px; margin-top: -10px;`;

export const TextDiv2 = styled.div`display: flex; flex-direction: row; margin-left: 6.5%; color: #474747; font-size: 14px; margin-top: -25px;`;

export const Text = styled.p`
margin-left: 4px;
border-bottom: 1px dotted #e0e0e0;
&:hover {
  border-bottom: 1px solid black;
  cursor: pointer;
}`;

export const PTag = styled.p`margin-right: 5px; font-weight: bold;`;

export const IconDivs = styled.div`display: flex; flex-direction: column; align-items:flex-end;`;

export const EmailTag = styled.p` &:hover {
  color: black;
  cursor: pointer;
}`;

export const CopyTag = styled.p` &:hover {
  color: black;
  cursor: pointer;
}`;

export const IconShare = styled.img`
width: 20px; height: 20px;
 opacity: 1;
 background-size: cover;
 cursor: pointer;
`;





