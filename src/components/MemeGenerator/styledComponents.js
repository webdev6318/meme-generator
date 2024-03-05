import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 70%;
    flex-direction: row;
    justify-content: flex-start;
    gap: 10px;
  }
`

export const MemeContainer = styled.div`
  display: ${props => (props.image === '' ? 'none' : 'flex block')};
  background-image: ${props => `url(${props.image})`};
  padding: 5px;
  width: 100%;
  height: 40vh;
  background-size: cover;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    order: 1;
    width: 400px;
    height: 300px;
  }
`

export const MemeText = styled.p`
  color: #ffffff;
  margin: 0;
  font-size: ${props => props.size}px;
`

export const FormContainer = styled.form`
  width: 100%;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

export const MainHeading = styled.h1`
  color: #35469c;
  font-family: 'Roboto';
`

export const SubmitButton = styled.button`
  border: none;
  outline: none;
  background-color: #0b69ff;
  padding: 8px 16px;
  color: #ffffff;
  border-radius: 5px;
`

export const LabelInput = styled.label`
  color: #1e293b;
`

export const FormInput = styled.input`
  outline: none;
  border: 1px solid #d7dfe9;
  padding: 5px;
  & :focus {
    outline: none;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 10px 0;
`
export const SelectInput = styled.select`
  outline: none;
  border: 1px solid #d7dfe9;
  padding: 5px;
`
