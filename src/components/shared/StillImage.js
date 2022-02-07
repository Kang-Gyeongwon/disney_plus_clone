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
    <StillImg src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/84A597261952771566AA11482D89DB0472703DFF4322A39DA9EE1D2A8B993E41/scale?width=2880&aspectRatio=1.78&format=jpeg" />
  </StillImageBox>
}

export default StillImage