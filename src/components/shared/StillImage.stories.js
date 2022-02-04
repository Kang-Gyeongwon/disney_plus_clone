import StillImage from "./StillImage";

export default {
  title: "Example/StillIamge",
  component: StillImage
}

const Template = args => <StillImage {... args} />

export const common_sitll_image = Template.bind({})

common_sitll_image.args = {
  StillImageUrl: ''
}