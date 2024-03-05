import {Component} from 'react'
import {
  AppContainer,
  MainHeading,
  SubmitButton,
  LabelInput,
  FormInput,
  InputContainer,
  MemeContainer,
  FormContainer,
  MemeText,
  SelectInput,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

export default class MemeGenerator extends Component {
  state = {
    fontSize: '',
    imgUrl: '',
    topLine: '',
    bottomLine: '',
  }

  onSubmitMeme = e => {
    e.preventDefault()
    this.setState({
      imgUrl: e.target.imageUrl.value,
      topLine: e.target.topLine.value,
      bottomLine: e.target.bottomLine.value,
      fontSize: e.target.fontSize.value,
    })
  }

  render() {
    const {imgUrl, fontSize, topLine, bottomLine} = this.state
    return (
      <>
        <MainHeading>Meme Generator</MainHeading>
        <AppContainer>
          <MemeContainer data-testid="meme" image={imgUrl}>
            <MemeText size={fontSize}>{topLine}</MemeText>
            <MemeText size={fontSize}>{bottomLine}</MemeText>
          </MemeContainer>
          <FormContainer onSubmit={this.onSubmitMeme}>
            <InputContainer>
              <LabelInput htmlFor="url-id">IMAGE URL</LabelInput>
              <FormInput name="imageUrl" id="url-id" />
            </InputContainer>
            <InputContainer>
              <LabelInput htmlFor="top-id">Top Text</LabelInput>
              <FormInput name="topLine" id="top-id" />
            </InputContainer>
            <InputContainer>
              <LabelInput htmlFor="bot-id">Bottom Text</LabelInput>
              <FormInput name="bottomLine" id="bot-id" />
            </InputContainer>
            <InputContainer>
              <LabelInput htmlFor="select-id">Font Size</LabelInput>
              <SelectInput name="fontSize" id="select-id">
                {fontSizesOptionsList.map(item => (
                  <option key={item.optionId}>{item.displayText}</option>
                ))}
              </SelectInput>
            </InputContainer>
            <SubmitButton type="submit">Generate</SubmitButton>
          </FormContainer>
        </AppContainer>
      </>
    )
  }
}
