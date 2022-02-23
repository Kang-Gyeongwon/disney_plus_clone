import StillImage from "./StillImage";

export default {
  title: "Example/StillIamge",
  component: StillImage
}

const Template = args => <StillImage {... args} />

export const common_sitll_image = Template.bind({})

common_sitll_image.args = {
  background: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/84A597261952771566AA11482D89DB0472703DFF4322A39DA9EE1D2A8B993E41/scale?width=2880&aspectRatio=1.78&format=jpeg',
  title: '모아나'
}