import styled from 'styled-components';

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
export const Title = styled.h1`
font-size: 32px;
font-weight: 700;
color: #000;
font-family: Arial;
margin-left: 15px;
position: relative;
left: -.305%;
`;

export const Rating = styled.div`
--percent: calc(var(4) / 5 * 100%);
--width: 20%;
margin-left: 13px;
letter-spacing: 1px;
font-size: var(--dot-size);
font-family: times; // make sure ★ appears correctly
line-height: -5;
margin-right: -4px;
position:relative;
top: -30px;
left: -1%;

&:hover {
  cursor: pointer;
}


&::before {
  content: '●●●●○';
  letter-spacing: -2px;
  padding: 0;
  margin-right: -4px;
  background: linear-gradient(90deg, var(--dot-background) var(--percent), var(--dot-color) var(--percent));
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
margin-left: 13px;
font-size: 14px;
border-bottom: 1px dotted #e0e0e0;
align-items: center;
color: #474747;
position:relative;
top: -32.5px;
&:hover {
  border-bottom: 1px solid #474747;
  font-weight: bold;
  cursor: pointer;
}
`;
export const TextHeader = styled.div`display: flex; justify-content: space-between;
height: 40px;`;
export const SpanText =styled.span`position:relative; left: 12px; top: -20px; font-weight: bold;
color: #474747;
display: inline-block;
font-size: 14px;
line-height: 14px;`;
export const H4Text = styled.p`line-height: 14px; display:  flex; justify-content: left; font-size: 14px;
line-height: 18px;
color: #474747;
letter-spacing: .5px; position: relative; left: 16px; top: -36px;
`;
export const Text = styled.p`
margin-left: 4px;
border-bottom: 1px dotted #e0e0e0;
&:hover {
  border-bottom: 1px solid black;
  cursor: pointer;
}`;
export const Heart = styled.img`
 width: 15px; height: 15px; display: flex; justify-content: flex-start;position: relative;
 top: -21.5px; right: -50.45%;
 opacity: 1; font-family: Poppins;
 cursor: pointer;
`;

export const IconShare = styled.img`
width: auto; height: 20px; position: relative;
 top: -30px; right: 10%;
 opacity: 1;
 background-size: cover;
 cursor: pointer;
`;

export const Text2 = styled.p`
font-size: 14px;
line-height: 18px;
border-bottom: 1px dotted #e0e0e0;
font-weight:300;
color: #474747;
letter-spacing: .5px;
position: relative;
left: -49.5%;
top: -10px;
&:hover {
  border-bottom: 1px solid black;
  cursor: pointer;
}`
;
export const Text3 = styled.p` display: flex;
 justify-content: flex-start;
font-size: 14px;
line-height: 18px;
font-weight:300;
border-bottom: 1px dotted #e0e0e0;
color: #474747;
letter-spacing: .5px;
position: relative;
left: -47%;
top: -10px;
&:hover {
  border-bottom: 1px solid black;
  cursor: pointer;
}`
;
export const CarouselFooter = styled.div`display: flex; flex-direction: column; align-items: center; position: relative; top: -30px; left: -15px;`;

export const CarouselFooterText = styled.h1`font-family: Poppins; font-size: 16px; color: #2c2c2c; position: relative; top: -15px;`;
export const CarouselFooterTextTwo = styled.h4`font-family: arial; font-size: 12px; color: #2c2c2c; position: relative; top: -38px; right: -7.3%; font-weight: lighter;`;
export const CarouselFooterImage = styled.img`height: 22px; width: 22px; position: relative; left: -100px; top: -90px;`;

export const CarouselFooterButton = styled.button`border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 14px;
margin: 4px 2px;
cursor: pointer;
background-color: black;
font-style: normal;
font-stretch: normal;
letter-spacing: normal;
font-weight: 700;
width:99%;
position: relative;
left: 15px;
top: -70px;
transition-duration: 0.3s;
&:hover {
  background-color: #2c2c2c;
}
`;
export const WhiteArrowDown = styled.img`height:20px; width: 18px; position: absolute; top: 55px; right: 10px; `

export const Divider = styled.hr`height: 1px; background-color: #ccc;
border: none; position:relative; bottom: 100px;
`;
export const OverviewDiv = styled.div`display:flex; flex-direction:column;
height: 150px;
`;
export const OverviewText = styled.h4`font-size:16px; font-family: poppins;
color: #474747; font-weight:550;
position: relative;
top: -110px;
right: -23px;
`;
export const OverviewPar = styled.p`font-size:14px; font-family: poppins;
color: #474747; font-weight:250;
position: relative;
top: -135px;
right: -3.5%;
@media(max-width: 900px) {
  right: -1%;
}
`
export const OverviewMoreSpan = styled.span`position: relative;
top: -166px;
right: -76%;
font-size:14px;
font-family: poppins;
color: #474747; font-weight:250;
border-bottom: .2px dotted #e0e0e0;
border-bottom-color: rgb(224, 224, 224);
width: 3.5%;
&:hover {
  border-bottom: 1px solid black;
  cursor: pointer;
}
@media(max-width: 1200px) {
  top: -150px;
}
`;

export const OverviewFirstClock = styled.img`height:20px; width: 20px; position: relative;
top: -155px;
right: -20px;`

export const OverviewHoursText = styled.p`color: #f73; font-weight: 700; line-height:20px;
font-size: 14px;
font-family: poppins;
position: relative;
top: -189px;
right: -45px;`;

export const OverviewHoursText2 = styled.p`color: #474747; line-height:20px;
font-size: 14px;
font-family: poppins;
position: relative;
top: -217px;
right: -45px;`;

export const OverviewHoursAnchor = styled.a`color: #069; line-height:20px;
font-size: 14px;
font-family: poppins;
position: relative;
top: -230px;
right: -45px;
cursor: pointer;
`;

export const OverviewDurationClock = styled.img`height:22px; width: 22px; position: relative;
top: -230px;
right: -19px;`

export const OverviewDurationText = styled.p`color: #474747; line-height:20px;
font-size: 14px;
font-weight: 600;
font-family: poppins;
position: relative;
top: -265px;
right: -45px;`;

export const OverviewHoursText3 = styled.p`color: #474747; line-height:20px;
font-size: 14px;
font-family: poppins;
position: relative;
top: -312px;
right: -170px;`;

export const OverviewAddress = styled.img`height:20px; width: 20px; position: relative;
top: -315px;
right: -20px;`

export const OverviewAddressText = styled.p`color: #474747; line-height:20px;
font-size: 14px;
font-weight: 600;
font-family: poppins;
position: relative;
top: -350px;
right: -5%;
@media(max-width: 800px) {
  right: -20%;
  top: -360px;
}
`;

export const OverviewAddressText2 = styled.p`color: #474747; line-height:20px;
font-size: 14px;
font-family: poppins;
position: relative;
top: -397px;
right: -12%;
@media (max-width: 800px) {
  top: -395px;
  right: -25%;
  width: 50%;
}
`;

export const OverviewMapSpan = styled.span`;position: relative;
top: -430.2px;
right: -57%;font-size:14px; font-family: poppins;
color: #474747; font-weight:250;
cursor: pointer;
border-bottom: .2px dotted #e0e0e0;
border-bottom-color: rgb(224, 224, 224);
width: 2.9%;
&:hover {
  border-bottom: 1px solid black;
  cursor: pointer;
}
@media (max-width: 1200px) {
  top: -417px;
  right: -25%;
}
`;

export const OverviewImproveSpan = styled.span` position: relative;
top: -440px;
right: -5.5%;
font-size:14px;
font-family: poppins;
color: #474747; font-weight:250;
cursor: pointer;
width: 13.5%;
border-bottom: .2px dotted #e0e0e0;
border-bottom-color: rgb(224, 224, 224);
&:hover {
  border-bottom: 1px solid black;
  cursor: pointer;
}
@media (max-width: 900px) {
  right: -15%;
  width: 35%;
}
`;

export const OverviewPencil = styled.img`height:20px; width: 20px; position: relative;
top: -415px;
right: -20px;`

export const CarouselPhotos = styled.img`height:85px; width: 85px; position: relative;
top: -703px;
right: -38px;
background-color: #faf1ed;
`
export const CarouselPhotosButton = styled.button`min-width: 32px;
height: 32px;
border-radius: 16px;
padding: 10px 25px;
color: white;
font-weight: 800;
background-color: rgba(0, 0, 0, 0.5);
cursor: pointer;
border: 2px solid rgba(0,0,0,0);
text-align: right;
font-family: Arial;
font-weight: 400;
font-stretch: normal;
font-size: 12px;
position: relative;
left: -60px;
top: -480px;
transition-duration: 0.3s;
&:hover {
  background-color: rgba(0, 0, 0.4, 0.75);
}
`
export const TravelersChoice = styled.img`height:85px; width: 85px; position: relative;
top: -703px;
right: -1%;
background-color: #faf1ed;
`
export const TravelersPhotoLogo = styled.img`height:20px; width: 20px; position: relative;
top: -475px;
right: 182px;
z-index: 3;
`

export const ContainerDiv = styled.div`display: flex; flex-direction: column; align-items: flex-start;
justify-content: center;
`;
export const ContainerDivRatingAndReviews = styled.div`display: flex; flex-direction: row;
align-items: flex-start;
`;
export const ContainerDivHeaderText = styled.div`
`;

export const IconContainerDIv = styled.div`display: flex; `;

export const Image0 = styled.img`width: 221px; height: 140px; margin: 20px 20px 0px 20px; &:hover {
  opacity: 0.8;
}
cursor: pointer;
`

export const CloseIcon = styled.a`display:block;
  box-sizing:border-box;
  width:15px;
  height:20px;
  border-radius: 100%;
  background: -webkit-linear-gradient(-45deg, transparent 0%, transparent 46%, #474747 46%, #474747 56%,transparent 56%, transparent 100%), -webkit-linear-gradient(45deg, transparent 0%, transparent 46%, #474747 46%, #474747 56%,transparent 56%, transparent 100%);
  background-color:transparent;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
  position: absolute;
  top: 1%;
  right: 5%;
  cursor: pointer;
`;

export const CloseIcon2 = styled.a`display:block;
  box-sizing:border-box;
  width:15px;
  height:20px;
  border-radius: 100%;
  background: -webkit-linear-gradient(-45deg, transparent 0%, transparent 46%, #474747 46%, #474747 56%,transparent 56%, transparent 100%), -webkit-linear-gradient(45deg, transparent 0%, transparent 46%, #474747 46%, #474747 56%,transparent 56%, transparent 100%);
  background-color:transparent;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
  position: absolute;
  top: 12px;
  right: 3%;
  cursor: pointer;
`;

export const IconDivs = styled.div`display: flex; flex-direction: column; justify-content: flex-start;`;

export const TextDivs = styled.div`display: flex; flex-direction: column; justify-content: flex-start; position: relative; top: -45px;`;

export const TextDiv1 = styled.div`display: flex; flex-direction:row; margin-left: 1px; color: #474747; font-size: 14px;`;

export const TextDiv2 = styled.div`display: flex; flex-direction: row; margin-left: 3.5%; position: relative; top: -25px; color: #474747; font-size: 14px;`;