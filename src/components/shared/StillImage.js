import styled from "styled-components";

const StillImageBox = styled.div`
  width: 23.481%; height: 86.718%;
  box-sizing: border-box; overflow: hidden;
  margin: 0; padding: 0;
`

const StillImg = styled.img`
  max-width: 100%; height: auto;
  background-repeat: no-repeat; background-position: center; background-size: 100% 100%;
`

const StillImage = () => {
  return <StillImageBox>
    <StillImg />
  </StillImageBox>
}

export default StillImage