import styled from "styled-components";

export const VideoDiv = styled.div`
    width: 20vw;
    height: 30vh;
    display: grid;
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 1fr;
    border-style: solid;
    border-width: thin;
    align-items: start;
    justify-items: stretch;    
    border-radius: 20px
`

export const VideoImg = styled.img`
    border-radius: 10px 10px 0px 0px;
    width: 20vw;
    height: 20vh;
`